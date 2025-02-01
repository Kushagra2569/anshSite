<script>
    import { inView } from '$lib/actions/inView';
    import Navbar from '$lib/components/Navbar.svelte';
    import { slide } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    
    export let data;
    let expandedCard = null;
    
    function toggleCard(index, event) {
        event?.stopPropagation();
        expandedCard = expandedCard === index ? null : index;
    }

    function handleClickOutside(event) {
        const cards = document.querySelectorAll('.card');
        let clickedOutside = true;
        cards.forEach(card => {
            if (card.contains(event.target)) clickedOutside = false;
        });
        if (clickedOutside && expandedCard !== null) expandedCard = null;
    }
</script>

<svelte:window on:click={handleClickOutside} />

<Navbar />
<div class="container mx-auto px-4 py-16">
    <div class="max-w-6xl mx-auto">
        <div use:inView={{ threshold: 0.3 }} class="scroll-fade mb-12">
            <h1 class="text-4xl font-bold mb-4">{data.title}</h1>
            <div class="divider divider-primary"></div>
            <div class="text-lg mb-8" innerHTML={data.content}></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {#each data.media as item, i}
                <div 
                    class="card bg-base-100 shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl"
                    class:md:col-span-2={expandedCard === i}
                    class:hidden={expandedCard !== null && expandedCard !== i}
                    on:click={(e) => toggleCard(i, e)}
                    on:keydown={(e) => e.key === 'Enter' && toggleCard(i, e)}
                    role="button"
                    {...(expandedCard === i ? { tabindex: 0 } : {})}
                >
                    <div class="card-body">
                        <h2 class="text-2xl font-bold text-primary mb-4">{item.title}</h2>
                        <p class:line-clamp-2={expandedCard !== i}>{item.description}</p>
                        
                        {#if expandedCard === i}
                            <div transition:slide={{ duration: 300, easing: cubicOut }} class="mt-4">
                                <h3 class="text-xl font-bold text-primary mb-3">Objective</h3>
                                <p class="mb-6">{item.Objective}</p>

                                <h3 class="text-xl font-bold text-primary mb-3">Strategy</h3>
                                <p class="mb-6">{item.strategy}</p>

                                {#each item.Execution as exec}
                                    <h3 class="text-xl font-bold text-primary mb-3">{exec.title}</h3>
                                    <ul class="list-disc list-inside mb-6">
                                        {#each exec.points as point}
                                            <li>{point}</li>
                                        {/each}
                                    </ul>
                                {/each}

                                <h3 class="text-xl font-bold text-primary mb-3">{item.Role.title}</h3>
                                <p class="mb-6">{item.Role.description}</p>

                                {#each item.Impact as impact}
                                    <h3 class="text-xl font-bold text-primary mb-3">{impact.title}</h3>
                                    <blockquote class="mb-6">
                                        <p>"{impact.quote.text}"</p>
                                        <footer class="text-right">- {impact.quote.author}</footer>
                                    </blockquote>
                                {/each}
                            </div>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div> 
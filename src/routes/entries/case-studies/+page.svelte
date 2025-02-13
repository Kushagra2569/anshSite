<script>
    import { inView } from '$lib/actions/inView';
    import Navbar from '$lib/components/Navbar.svelte';
    import { slide } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    import Card from '$lib/components/Card.svelte';
    
    export let data;
    let expandedCard = null;
    let navRef;
    
    function toggleCard(index, event) {
        event?.stopPropagation();
        const wasExpanded = expandedCard === index;
        expandedCard = expandedCard === index ? null : index;
        
        if (expandedCard !== null) {
            setTimeout(() => {
                event.target.closest('.card').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                });
            }, 100);
        } else if (wasExpanded) {
            setTimeout(() => {
                window.scrollTo({ 
                    top: 0,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
</script>

<Navbar class="z-50"/>
<div class="bg-gradient-to-b from-primary to-secondary min-h-screen">
    <div class="w-full px-4 py-16">
        <div class="w-screen -mx-4">
            <div class="w-screen mx-auto px-4 flex flex-col items-center">
                <div use:inView={{ threshold: 0.3 }} class="scroll-fade flex flex-col items-center w-full mb-12" bind:this={navRef}>
                    <h1 class="text-4xl font-bold mb-4 max-w-6xl text-secondary">{data.title}</h1>
                    <div class="max-w-6xl w-full">
                        <div class="divider divider-accent"></div>
                    </div>
                    <div class="text-4xl font-bold mb-4 max-w-6xl w-full text-secondary">{@html data.content}</div>
                </div>

                <div class={`mt-8  mx-auto px-4 ${expandedCard === null ? 'grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl' : 'w-5/6'}`}>
                    {#each data.media as item, i}
                        {#if expandedCard === null || expandedCard === i}
                            <Card
                                sizeClass={expandedCard === i ? 'md:col-span-2' : ''}
                                clickable={true}
                                onClick={(e) => toggleCard(i, e)}
                            >
                                <div class="card-body">
                                    <h2 class="text-2xl font-bold text-accent mb-4">{item.title}</h2>
                                    <p class:line-clamp-2={expandedCard !== i} class:mb-4={expandedCard === i}>{item.description}</p>
                                    
                                    {#if expandedCard === i}
                                        <div transition:slide={{ duration: 300, easing: cubicOut }}>
                                            <h3 class="text-xl font-bold text-accent mb-3">Objective</h3>
                                            <p class="mb-6">{item.Objective}</p>

                                            <h3 class="text-xl font-bold text-accent mb-3">Strategy</h3>
                                            <p class="mb-6">{item.strategy}</p>

                                            {#each item.Execution as exec}
                                                <h3 class="text-xl font-bold text-accent mb-3">{exec.title}</h3>
                                                <ul class="list-disc list-inside mb-6">
                                                    {#each exec.points as point}
                                                        <li>{point}</li>
                                                    {/each}
                                                </ul>
                                            {/each}

                                            <h3 class="text-xl font-bold text-accent mb-3">{item.Role.title}</h3>
                                            <p class="mb-6">{item.Role.description}</p>

                                            {#each item.Impact as impact}
                                                <h3 class="text-xl font-bold text-accent mb-3">{impact.title}</h3>
                                                <blockquote class="mb-6">
                                                    <p>"{impact.quote.text}"</p>
                                                    <footer class="text-right">- {impact.quote.author}</footer>
                                                </blockquote>
                                            {/each}
                                        </div>
                                    {/if}
                                </div>
                            </Card>
                        {/if}
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div> 
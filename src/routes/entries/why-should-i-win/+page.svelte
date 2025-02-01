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
</script>

<Navbar />
<div class="container mx-auto px-4 py-16">
    <div class="max-w-6xl mx-auto">
        <div use:inView={{ threshold: 0.3 }} class="scroll-fade mb-12">
            <h1 class="text-4xl font-bold mb-4">{data.title}</h1>
            <div class="divider divider-primary"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Image Card -->
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-4 pt-4">
                    <img 
                        src={data.media[0].src} 
                        alt={data.media[0].alt} 
                        class="rounded-xl w-full"
                    />
                </figure>
            </div>

            <!-- Description Card -->
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-2xl font-bold text-primary mb-4">About Me</h2>
                    <p>{data.media[0].description}</p>
                </div>
            </div>
        </div>

        <!-- Testimonials Section -->
        {#if data.media[0].testimonials}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {#each ['employer', 'client'] as type}
                    {#if data.media[0].testimonials[type]}
                        <div 
                            class="card bg-base-100 shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl"
                            class:md:col-span-2={expandedCard === type}
                            class:hidden={expandedCard !== null && expandedCard !== type}
                            on:click={(e) => toggleCard(type, e)}
                            on:keydown={(e) => e.key === 'Enter' && toggleCard(type, e)}
                            role="button"
                            {...(expandedCard === type ? { tabindex: 0 } : {})}
                        >
                            <div class="card-body">
                                <h2 class="text-2xl font-bold text-primary mb-4">
                                    {data.media[0].testimonials[type].title}
                                </h2>
                                {#if expandedCard === type}
                                    <div transition:slide={{ duration: 300, easing: cubicOut }}>
                                        {#each data.media[0].testimonials[type].quotes as quote}
                                            <blockquote class="border-l-4 border-primary pl-4 mb-6">
                                                <p class="italic">{quote.text}</p>
                                                <footer class="text-sm mt-2 font-medium">— {quote.author}</footer>
                                            </blockquote>
                                        {/each}
                                    </div>
                                {:else}
                                    <p class="line-clamp-2 italic">Click to view {type} testimonials</p>
                                {/if}
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
        {/if}
    </div>
</div> 
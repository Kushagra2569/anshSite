<script>
    import { inView } from '$lib/actions/inView';
    import { page } from '$app/stores';
    import Navbar from '$lib/components/Navbar.svelte';
    import { slide } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    
    export let data; // This will receive the page data from the server
    $: params = $page.params;
    
    // Track which card is expanded
    let expandedCard = null;
    
    // Set initial expanded state based on page
    $: {
        if (params.entry === 'ai-pr-campaign' || params.entry === 'video-campaign') {
            expandedCard = 0;
        }
    }
    
    function toggleCard(index, event) {
        event?.stopPropagation();
        
        // Handle case studies
        if (params.entry === 'case-studies') {
            expandedCard = expandedCard === index ? null : index;
        }
        // Handle testimonials in why-should-i-win
        else if (params.entry === 'why-should-i-win' && (index === 'employer' || index === 'client')) {
            expandedCard = expandedCard === index ? null : index;
        }
    }

    // Only handle outside clicks for case studies
    function handleClickOutside(event) {
        if (params.entry === 'case-studies' || params.entry === 'why-should-i-win') {
            const cards = document.querySelectorAll('.card');
            let clickedOutside = true;
            
            cards.forEach(card => {
                if (card.contains(event.target)) {
                    clickedOutside = false;
                }
            });

            if (clickedOutside && expandedCard !== null) {
                expandedCard = null;
            }
        }
    }
</script>

<svelte:window on:click={handleClickOutside} />

<Navbar />
<div class="container mx-auto px-4 py-16">
    <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div 
            use:inView={{ threshold: 0.3 }}
            class="scroll-fade mb-12"
        >
            <h1 class="text-4xl font-bold mb-4">{data?.title || 'Title'}</h1>
            <div class="divider divider-primary"></div>
        </div>

        {#if params.entry === 'why-should-i-win'}
            <!-- Why Should I Win Layout -->
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
                    <!-- Employer Testimonials Card -->
                    {#if data.media[0].testimonials.employer}
                        <div 
                            class="card bg-base-100 shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl"
                            class:md:col-span-2={expandedCard === 'employer'}
                            class:hidden={expandedCard !== null && expandedCard !== 'employer'}
                            on:click={(e) => toggleCard('employer', e)}
                            on:keydown={(e) => e.key === 'Enter' && toggleCard('employer', e)}
                            role="button"
                            {...(expandedCard === 'employer' ? { tabindex: 0 } : {})}
                        >
                            <div class="card-body">
                                <h2 class="text-2xl font-bold text-primary mb-4">{data.media[0].testimonials.employer.title}</h2>
                                {#if expandedCard === 'employer'}
                                    <div transition:slide={{ duration: 300, easing: cubicOut }}>
                                        {#each data.media[0].testimonials.employer.quotes as quote}
                                            <blockquote class="border-l-4 border-primary pl-4 mb-6">
                                                <p class="italic">{quote.text}</p>
                                                <footer class="text-sm mt-2 font-medium">— {quote.author}</footer>
                                            </blockquote>
                                        {/each}
                                    </div>
                                {:else}
                                    <p class="line-clamp-2 italic">Click to view employer testimonials</p>
                                {/if}
                            </div>
                        </div>
                    {/if}

                    <!-- Client Testimonials Card -->
                    {#if data.media[0].testimonials.client}
                        <div 
                            class="card bg-base-100 shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl"
                            class:md:col-span-2={expandedCard === 'client'}
                            class:hidden={expandedCard !== null && expandedCard !== 'client'}
                            on:click={(e) => toggleCard('client', e)}
                            on:keydown={(e) => e.key === 'Enter' && toggleCard('client', e)}
                            role="button"
                            {...(expandedCard === 'client' ? { tabindex: 0 } : {})}
                        >
                            <div class="card-body">
                                <h2 class="text-2xl font-bold text-primary mb-4">{data.media[0].testimonials.client.title}</h2>
                                {#if expandedCard === 'client'}
                                    <div transition:slide={{ duration: 300, easing: cubicOut }}>
                                        {#each data.media[0].testimonials.client.quotes as quote}
                                            <blockquote class="border-l-4 border-primary pl-4 mb-6">
                                                <p class="italic">{quote.text}</p>
                                                <footer class="text-sm mt-2 font-medium">— {quote.author}</footer>
                                            </blockquote>
                                        {/each}
                                    </div>
                                {:else}
                                    <p class="line-clamp-2 italic">Click to view client testimonials</p>
                                {/if}
                            </div>
                        </div>
                    {/if}
                </div>
            {/if}
        {:else}
            <!-- Regular Content Layout -->
            <!-- Content Section -->
            {#if data?.content}
                <div 
                    use:inView={{ threshold: 0.3 }}
                    class="scroll-fade prose prose-invert max-w-none mb-12"
                >
                    {@html data.content}
                </div>
            {/if}

            <!-- Media Section -->
            <div 
                use:inView={{ threshold: 0.3 }}
                class="scroll-fade grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {#if data?.media && params.entry === 'case-studies'}
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
                            {#if item.src}
                                <figure class="px-4 pt-4">
                                    <img 
                                        src={item.src} 
                                        alt={item.alt} 
                                        class="rounded-xl w-full"
                                    />
                                </figure>
                            {/if}
                            <div class="card-body">
                                <h2 class="text-2xl font-bold text-primary mb-4">{item.title}</h2>
                                <p class:line-clamp-2={expandedCard !== i}>{item.description}</p>
                                {#if expandedCard === i}
                                    <div 
                                        transition:slide={{ duration: 300, easing: cubicOut }}
                                        class="mt-4"
                                    >
                                        <h3 class="text-xl font-bold text-primary mb-3">Objective</h3>
                                        <p>{item.Objective}</p>
                                        
                                        <h3 class="text-xl font-bold text-primary mt-6 mb-3">Strategy</h3>
                                        <p>{item.strategy}</p>
                                        
                                        <h3 class="text-xl font-bold text-primary mt-6 mb-3">Execution</h3>
                                        {#if Array.isArray(item.Execution)}
                                            {#each item.Execution as section}
                                                <div class="mb-4">
                                                    <h4 class="font-medium text-primary">{section.title}</h4>
                                                    <ul class="list-disc list-inside mt-2">
                                                        {#each section.points as point}
                                                            <li>{point}</li>
                                                        {/each}
                                                    </ul>
                                                </div>
                                            {/each}
                                        {:else}
                                            <p>{item.Execution}</p>
                                        {/if}

                                        {#if item.Role}
                                            <h3 class="text-xl font-bold text-primary mt-6 mb-3">{item.Role.title}</h3>
                                            <p class="whitespace-pre-line">{item.Role.description}</p>
                                        {/if}

                                        {#if item.Impact}
                                            <h3 class="text-xl font-bold text-primary mt-6 mb-3">Impact</h3>
                                            {#each item.Impact as impact}
                                                <div class="mb-4">
                                                    <h4 class="font-medium text-primary">{impact.title}</h4>
                                                    <blockquote class="border-l-4 border-primary pl-4 mt-2 italic">
                                                        <p>{impact.quote.text}</p>
                                                        <footer class="text-sm mt-2 font-medium">— {impact.quote.author}</footer>
                                                    </blockquote>
                                                </div>
                                            {/each}
                                        {/if}

                                        {#if item.sustainingMomentum}
                                            <h3 class="text-xl font-bold text-primary mt-6 mb-3">Sustaining Momentum</h3>
                                            {#each item.sustainingMomentum as section}
                                                <div class="mb-4">
                                                    <h4 class="font-medium text-primary">{section.title}</h4>
                                                    <ul class="list-disc list-inside mt-2">
                                                        {#each section.points as point}
                                                            <li>{point}</li>
                                                        {/each}
                                                    </ul>
                                                </div>
                                            {/each}
                                        {/if}

                                        {#if item.testimonials}
                                            <div class="mt-8">
                                                {#if item.testimonials.employer}
                                                    <h3 class="text-xl font-bold text-primary mb-4">{item.testimonials.employer.title}</h3>
                                                    {#each item.testimonials.employer.quotes as quote}
                                                        <blockquote class="border-l-4 border-primary pl-4 mb-6">
                                                            <p class="italic">{quote.text}</p>
                                                            <footer class="text-sm mt-2 font-medium">— {quote.author}</footer>
                                                        </blockquote>
                                                    {/each}
                                                {/if}

                                                {#if item.testimonials.client}
                                                    <h3 class="text-xl font-bold text-primary mt-8 mb-4">{item.testimonials.client.title}</h3>
                                                    {#each item.testimonials.client.quotes as quote}
                                                        <blockquote class="border-l-4 border-primary pl-4 mb-6">
                                                            <p class="italic">{quote.text}</p>
                                                            <footer class="text-sm mt-2 font-medium">— {quote.author}</footer>
                                                        </blockquote>
                                                    {/each}
                                                {/if}
                                            </div>
                                        {/if}
                                    </div>
                                {/if}
                            </div>
                        </div>
                    {/each}
                {:else if data?.title}
                    <div 
                        class="card bg-base-100 shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl"
                        class:md:col-span-2={expandedCard === 0}
                        class:hidden={expandedCard !== null && expandedCard !== 0}
                        on:click={(e) => toggleCard(0, e)}
                        on:keydown={(e) => e.key === 'Enter' && toggleCard(0, e)}
                        role="button"
                        {...(expandedCard === 0 ? { tabindex: 0 } : {})}
                    >
                        <div class="card-body">
                            <h2 class="text-2xl font-bold text-primary mb-4">{data.title}</h2>
                            <p class:line-clamp-2={expandedCard !== 0}>{data.description}</p>
                            {#if expandedCard === 0}
                                <div 
                                    transition:slide={{ duration: 300, easing: cubicOut }}
                                    class="mt-4"
                                >
                                    <h3 class="text-xl font-bold text-primary mb-3">Objective</h3>
                                    <p>{data.Objective}</p>
                                    
                                    <h3 class="text-xl font-bold text-primary mt-6 mb-3">Strategy</h3>
                                    <p>{data.strategy}</p>
                                    
                                    <h3 class="text-xl font-bold text-primary mt-6 mb-3">Execution</h3>
                                    {#if Array.isArray(data.Execution)}
                                        {#each data.Execution as section}
                                            <div class="mb-4">
                                                <h4 class="font-medium text-primary">{section.title}</h4>
                                                <ul class="list-disc list-inside mt-2">
                                                    {#each section.points as point}
                                                        <li>{point}</li>
                                                    {/each}
                                                </ul>
                                            </div>
                                        {/each}
                                    {:else}
                                        <p>{data.Execution}</p>
                                    {/if}

                                    {#if data.Role}
                                        <h3 class="text-xl font-bold text-primary mt-6 mb-3">{data.Role.title}</h3>
                                        <p class="whitespace-pre-line">{data.Role.description}</p>
                                    {/if}

                                    {#if data.Impact}
                                        <h3 class="text-xl font-bold text-primary mt-6 mb-3">Impact</h3>
                                        {#each data.Impact as impact}
                                            <div class="mb-4">
                                                <h4 class="font-medium text-primary">{impact.title}</h4>
                                                <blockquote class="border-l-4 border-primary pl-4 mt-2 italic">
                                                    <p>{impact.quote.text}</p>
                                                    <footer class="text-sm mt-2 font-medium">— {impact.quote.author}</footer>
                                                </blockquote>
                                            </div>
                                        {/each}
                                    {/if}

                                    {#if data.sustainingMomentum}
                                        <h3 class="text-xl font-bold text-primary mt-6 mb-3">Sustaining Momentum</h3>
                                        {#each data.sustainingMomentum as section}
                                            <div class="mb-4">
                                                <h4 class="font-medium text-primary">{section.title}</h4>
                                                <ul class="list-disc list-inside mt-2">
                                                    {#each section.points as point}
                                                        <li>{point}</li>
                                                    {/each}
                                                </ul>
                                            </div>
                                        {/each}
                                    {/if}

                                    {#if data.testimonials}
                                        <div class="mt-8">
                                            {#if data.testimonials.employer}
                                                <h3 class="text-xl font-bold text-primary mb-4">{data.testimonials.employer.title}</h3>
                                                {#each data.testimonials.employer.quotes as quote}
                                                    <blockquote class="border-l-4 border-primary pl-4 mb-6">
                                                        <p class="italic">{quote.text}</p>
                                                        <footer class="text-sm mt-2 font-medium">— {quote.author}</footer>
                                                    </blockquote>
                                                {/each}
                                            {/if}

                                            {#if data.testimonials.client}
                                                <h3 class="text-xl font-bold text-primary mt-8 mb-4">{data.testimonials.client.title}</h3>
                                                {#each data.testimonials.client.quotes as quote}
                                                    <blockquote class="border-l-4 border-primary pl-4 mb-6">
                                                        <p class="italic">{quote.text}</p>
                                                        <footer class="text-sm mt-2 font-medium">— {quote.author}</footer>
                                                    </blockquote>
                                                {/each}
                                            {/if}
                                        </div>
                                    {/if}
                                </div>
                            {/if}
                        </div>
                    </div>
                {/if}
            </div>
        {/if}
    </div>
</div>

<style>
    .card {
        transform-origin: top;
        transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .card:hover {
        transform: translateY(-4px);
    }
</style>

<script>
    import { inView } from '$lib/actions/inView';
    import Navbar from '$lib/components/Navbar.svelte';
    import { slide } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    
    export let data;
</script>

<Navbar />
<div class="container mx-auto px-4 py-16">
    <div class="max-w-6xl mx-auto">
        <div use:inView={{ threshold: 0.3 }} class="scroll-fade mb-12">
            <h1 class="text-4xl font-bold mb-4">{data.title}</h1>
            <div class="divider divider-primary"></div>
        </div>

        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <!-- Same content structure as ai-pr-campaign -->
                <p class="mb-6">{data.description}</p>

                <h3 class="text-xl font-bold text-primary mb-3">Objective</h3>
                <p class="mb-6">{data.Objective}</p>

                <h3 class="text-xl font-bold text-primary mb-3">Strategy</h3>
                <p class="mb-6">{data.strategy}</p>

                <!-- Rest of the sections same as ai-pr-campaign -->
                <!-- ... -->
            </div>
        </div>
    </div>
</div> 
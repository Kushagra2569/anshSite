<script>
    import { inView } from '$lib/actions/inView';
    import Navbar from '$lib/components/Navbar.svelte';
    import { slide } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    import Card from '$lib/components/Card.svelte';
    
    export let data;
</script>

<Navbar />
<div class="bg-gradient-to-b from-primary to-secondary min-h-screen">
    <div class="w-full px-4 py-16">
        <div class="w-screen -mx-4">
            <div class="w-screen mx-auto px-4 flex flex-col items-center">
                <div use:inView={{ threshold: 0.3 }} class="scroll-fade flex flex-col items-center w-full mb-12">
                    <h1 class="text-4xl font-bold mb-4 text-secondary">{data.title}</h1>
                    <div class="max-w-6xl w-full">
                        <div class="divider divider-accent"></div>
                    </div>
                </div>

                <Card sizeClass="w-5/6">
                    <div class="card-body">
                        <p class="mb-6 text-4xl font-bold text-accent">{data.description}</p>

                        <h3 class="text-xl font-bold text-primary mb-3">Objective</h3>
                        {#each data.Objective as objective}
                            <p class="mb-6">{objective}</p>
                        {/each}

                        <h3 class="text-xl font-bold text-primary mb-3">Strategy</h3>
                        <p class="mb-6">{data.strategy}</p>

                        <h3 class="text-xl font-bold text-primary mb-3">Execution</h3>
                        {#if Array.isArray(data.Execution)}
                            {#each data.Execution as section}
                                <div class="mb-6">
                                    <h4 class="font-medium text-primary">{section.title}</h4>
                                    <ul class="list-disc list-inside mt-2">
                                        {#each section.points as point}
                                            <li>{point}</li>
                                        {/each}
                                    </ul>
                                </div>
                            {/each}
                        {/if}

                        {#if data.Role}
                            <h3 class="text-xl font-bold text-primary mt-6 mb-3">{data.Role.title}</h3>
                            <p class="whitespace-pre-line mb-6">{data.Role.description}</p>
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
                    </div>
                </Card>
            </div>
        </div>
    </div>
</div> 
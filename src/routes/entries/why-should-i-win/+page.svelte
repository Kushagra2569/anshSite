<script>
    import { inView } from '$lib/actions/inView';
    import Navbar from '$lib/components/Navbar.svelte';
    import { slide } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    import Card from '$lib/components/Card.svelte';
    import ansh2 from '$lib/assets/ansh2.jpeg';
    
    let expandedCard = null;
    
    function toggleCard(index, event) {
        event?.stopPropagation();
        expandedCard = expandedCard === index ? null : index;
        
        // Add scroll behavior when card is expanded
        if (expandedCard !== null) {
            setTimeout(() => {
                event.target.closest('.card').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                });
            }, 100);
        }
    }

    // Moving the data from page.js directly into the component
    const data = {
        title: 'Why Should I Win',
        content: `
            <p>A strategist, storyteller, and media expert driving impactful narratives that shape industries.</p>
            `,
        media: [
            {
                src: ansh2,
                alt: 'Ansh',
                title: 'Why I Should Win',
                description: 'What happens when, in the span of a week, you find yourself stranded—no branch head, no manager, no team? Just you and a regional lead, staring at a mountain of expectations with no safety net? Some would tread water, trying to stay afloat. I didn\'t. I steered the ship, not just to keep it moving, but to charge against the currents and come out ahead. A true story from my previous organisation. PR isn\'t about waiting for direction; it\'s about creating impact, no matter the circumstances.  I\'ve spent the last four years doing just that—navigating chaos, finding clarity, and delivering results. I\'ve worked on powerhouse brands like Cartier, Parle Agro, ITC Foods, Asian Paints, Microsoft, Intel, and L&T Semiconductors. But my real win? Taking a niche B2B deep tech company like Aerospike and making it shine in a space dominated by consumer giants – Best use of Media. When no one expected it, we won. Not just visibility—awards at industry events like PRAXIS, recognition, and a seat at the table where only the biggest names played. Because PR, to me, isn\'t about who has the loudest voice; it\'s about telling the right story, in the right way, to the right people.  Clients trust me to make their stories heard. Journalists respect the stories I craft. My team knows that when things get tough, I get tougher. In Taylor Swift\'s words \'I am a real tough kid, I for sure can handle my shit\'. I don\'t just do PR—I live it—with strategy, grit, and making brands matter. And this award? It\'s not just for me. It\'s for every moment I refused to sink when the tide was against me.',
                testimonials: {
                    employer: {
                        title: 'Employer Testimonial',
                        quotes: [
                            {
                                text: "Akanksha has been an invaluable asset to our team, consistently demonstrating exceptional dedication and expertise. Her outstanding writing skills, coupled with a deep understanding of our clients' businesses and evolving needs, have set her apart. She has an innate ability to craft compelling narratives that align seamlessly with brand messaging and strategic objectives.  Beyond her writing prowess, Akanksha is proactive, detail-oriented, and always goes the extra mile to ensure high-quality deliverables. Her keen insights into industry trends and ability to translate complex ideas into clear, impactful communication have greatly contributed to our success. Whether it's crafting media pitches, developing thought leadership content, or managing client communications, she approaches every task with professionalism and precision. We truly appreciate her contributions and look forward to seeing her continue to excel!  ",
                                author: 'Manju Menon, Group Business Director, Avian WE'
                            },
                            {
                                text: 'Working with Akanksha has been an absolute pleasure. She is meticulous in her approach, quickly grasping complex requirements and translating them into compelling narratives that resonate with the right audience. Her deep media relationships and strategic thinking ensure not just visibility, but meaningful impact. She has an innate ability to align brand messaging with industry trends, making every story relevant and powerful.  Beyond her expertise in media relations, Akanksha is an exceptional stakeholder manager, seamlessly balancing the needs of clients, journalists, and internal teams. Her leadership ensures smooth collaboration, even in high-pressure situations, fostering a results-driven yet supportive environment. She doesn\'t just execute campaigns—she builds lasting relationships and ensures every piece of communication strengthens the brand\'s reputation.  ',
                                author: 'Bhawana Singh, Senior Account Director, Avian WE'
                            }
                        ]
                    },
                    client: {
                        title: 'Client Testimonials',
                        quotes: [
                            {
                                text: 'Working with Akanksha has been a game-changer for Aerospike. In a niche sector where breaking through the noise is tough, she made sure our voice was not just heard but respected. She understands our brand inside out—not just what we do, but why it matters. Her storytelling isn\'t just strategic; it\'s compelling, landing us on platforms that truly move the needle.  What truly sets her apart is her relentless drive and ability to see beyond traditional PR. Recently, she connected us with a potential customer she met at an industry event—someone who was using a competitor\'s vector database. Because she deeply understands our technology, she recognized the opportunity, made the introduction, and created a conversation that wouldn\'t have happened otherwise.  She doesn\'t stop at media coverage—she connects dots others wouldn\'t even think of, leveraging her network to put us in front of customers and industry leaders. Whether it\'s thought leadership, brand positioning, or navigating challenges, she always brings clarity, confidence, and results. She\'s not just a PR partner; she\'s an extension of our team, and we wouldn\'t have it any other way.  ',
                                author: 'Aveekshith Bushan, VP and GM, APJ, Aerospike'
                            },
                            {
                                text: "Akanksha played a crucial role in shaping L&T Semiconductors' media presence right from our debut. With a deep understanding of the industry and strong media relationships, she ensured our narrative resonated across top-tier publications, positioning us as a leader from day one. At Semicon India 2024, her end-to-end support was invaluable—every detail, from media coordination to strategic storytelling, was executed flawlessly.  What truly stood out was her commitment to going beyond the expected. She didn't just focus on Indian publications; she made sure LTSCT had a global presence, securing international media interactions and even arranging key influencer engagements, like our discussion with Keith Bryant from SMTA Europe. Her dedication, foresight, and ability to turn vision into impactful media moments have been instrumental in building LTSCT's reputation in the semiconductor space.",
                                author: 'Dipu Jojo, Head of Marketing and Communications, L&T Semiconductor Technologies Ltd'
                            },
                        ]
                    }
                }
            }
        ]
    };
</script>

<Navbar />
<div class="bg-gradient-to-b from-primary to-secondary">
    <div class="w-full px-4 py-16">
        <div class="w-screen -mx-4 ">
            <div class="max-w-6xl mx-auto px-4">
                <div use:inView={{ threshold: 0.3 }} class="scroll-fade mb-12">
                    <h1 class="text-4xl text-secondary font-bold mb-4">{data.title}</h1>
                    <div class="divider divider-accent"></div>
                    <div class="text-4xl font-bold mb-4 max-w-6xl w-full text-secondary">{@html data.content}</div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Image Card -->
                    <Card sizeClass="h-full">
                        <figure class="h-full">
                            <img 
                                src={data.media[0].src} 
                                alt={data.media[0].alt} 
                                class="rounded-xl w-full h-full object-cover"
                            />
                        </figure>
                    </Card>

                    <!-- Description Card -->
                    <Card sizeClass="h-full">
                        <div class="card-body">
                            <h2 class="text-2xl font-bold text-accent mb-4">About Me</h2>
                            <p>{data.media[0].description}</p>
                        </div>
                    </Card>
                </div>
            </div>

            <!-- Testimonials Section -->
            {#if data.media[0].testimonials}
                <div class={` mt-8  mx-auto px-4 ${expandedCard === null ? ' grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl' : 'w-4/6'}`}>
                    {#each ['employer', 'client'] as type}
                        {#if data.media[0].testimonials[type] && (expandedCard === null || expandedCard === type)}
                            <Card
                                sizeClass={expandedCard === type ? 'md:col-span-2' : ''}
                                clickable={true}
                                onClick={(e) => toggleCard(type, e)}
                            >
                                <div class="card-body">
                                    <h2 class="text-2xl font-bold text-accent mb-4">
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
                            </Card>
                        {/if}
                    {/each}
                </div>
            {/if}
        </div>
    </div> 
</div>
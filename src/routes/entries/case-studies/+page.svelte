<script>
    import { inView } from '$lib/actions/inView';
    import Navbar from '$lib/components/Navbar.svelte';
    import { slide } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    import Card from '$lib/components/Card.svelte';
    import mediaimpact from '$lib/assets/mediaimpact.jpeg'
    import mediacoverage from '$lib/assets/mediacoverage.jpeg'
    import mediacoverage2 from '$lib/assets/mediacoverage2.jpeg'
    import mediacoverage3 from '$lib/assets/mediacoverage3.jpeg'
    import thinmaya from '$lib/assets/thinmaya.jpeg'
    import Shritama from '$lib/assets/Shritama .jpeg'
    import media from '$lib/assets/media.jpeg'
    import impactgraph from '$lib/assets/impactgraph.jpeg'
    import ibm from '$lib/assets/ibm.jpeg'
    import ibm2 from '$lib/assets/ibm2.jpeg'
    import award from '$lib/assets/awardaero.jpeg'
    
    export let data;
    let expandedCard = null;
    let navRef;
    
    function toggleCard(index, event) {
        event?.stopPropagation();
        console.log(index)
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

                <div class={`mt-8 mx-auto px-4 ${expandedCard === null ? 'grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl' : 'w-5/6'}`}>
                      <!-- Aerospike Case Study -->
                    {#if expandedCard === null || expandedCard === 0}
                <Card
                    sizeClass={expandedCard === 0 ? 'md:col-span-2' : 'min-h-[18rem] md:min-h-[16rem] '}
                    clickable={true}
                    onClick={(e) => toggleCard(0, e)}
                >
                    <div class="card-body">
                            <h2 class="text-xl md:text-2xl font-bold text-accent mb-4 ">Aerospike – Powering the 'Right Now Economy'</h2>
                            <p class:line-clamp-2={expandedCard !== 0} class:mb-4={expandedCard === 0}><i>"I drove Aerospike’s category ownership in real-time data, shaping its narrative to power the ‘Right Now Economy’ through strategic media engagement and thought leadership."</i></p>
                        
                            {#if expandedCard === 0}
                            <div transition:slide={{ duration: 300, easing: cubicOut }}>
                                            <h3 class="text-xl font-bold text-accent mb-3">Objective</h3>
                                            <ul class="list-disc list-inside">
                                                <li>Aerospike aimed to establish itself as the leading real-time data architecture driving digital transformation across BFSI, telecom, gaming, AdTech, e-commerce, and the public sector. </li>
                                                <li>The goal was to strengthen category ownership and position Aerospike as the backbone of the ‘Right Now Economy,’ emphasizing its impact on business transformation.</li>
                                            </ul>

                                            <h3 class="text-xl font-bold text-accent mb-3 mt-6">Strategy</h3>
                                            <h3 class="">To achieve this, we focused on:</h3>
                                            <ul class="list-inside list-disc">
                                                <li>Showcasing the necessity of real-time data platforms in accelerating digital transformation.</li>
                                                <li>Leveraging customer success stories to highlight Aerospike’s industry-leading capabilities and tangible business impact.</li>
                                                <li>Establishing Aerospike India’s role in enabling real-time decision-making across key sectors.</li>
                                            </ul>
                                        <h3 class="text-xl font-bold text-accent mb-3 mt-6">Media Target:</h3>
                                        <ul class="list-disc list-inside">
                                            <li class="text-accent ">Mainlines to spread brand awareness</li>
                                            <li class="text-accent ">Tech Trade Publications to drive customer awareness </li>
                                        </ul>

                                            <ul class="list-decimal list-inside ml-2">
                                            <h3 class="text-xl font-bold text-accent mb-3 mt-6">Execution Tactics:</h3>
                                            <ul class="list-decimal list-inside ml-2">
                                                <li class="text-xl font-bold text-accent mb-3">Build Awareness</li>
                                                <ul class="list-disc list-inside mb-6">
                                                    <li>Proactive and reactive interviews, and introductory meetings helped media outlets to get acquainted</li>
                                                    <li>Regular engagements with media on company developments and news</li>
                                                    <li>Expanded media outreach through new-age formats like roundtables and podcasts to amplify developer-centric messaging.</li>
                                                </ul>
                                                
                                                <li class="text-xl font-bold text-accent mb-3">Thought Leadership</li>
                                                <ul class="list-disc list-inside mb-6">
                                                    <li>Positioned Aveekshith Bushan, Vice President, Asia Pacific & Japan, as an industry thought leader through high-impact media features.</li>
                                                    <li>Created compelling thought leadership content in top-tier publications, reinforcing Aerospike’s expertise.</li>
                                                    <li>Developed engaging LinkedIn Pulse posts aligned with industry trends, Aveek’s insights, and Aerospike’s core messaging</li>
                                                </ul>
                                                
                                                <li class="text-xl font-bold text-accent mb-3">Customer Advocacy</li>
                                                <ul class="list-disc list-inside mb-6">
                                                    <li>Media engagements on customer use cases and stories.</li>
                                                    <li>Customer events were leveraged as LinkedIn pulse posts by Aerospike to drive advocacy</li>
                                                </ul>
                                            </ul>
                                            </ul>

                                            <h3 class="text-xl font-bold text-accent mb-3">My Role in the Project</h3>
                                            <p class="mb-6">In driving the success of this project, my role was centered around strategic storytelling—ensuring the right narrative reached the right platform at the right time. By deeply understanding the client's business, objectives, and industry landscape, I identified media-compelling angles that not only resonated with journalists but also positioned our client as a thought leader.
                                            
                                            <br>Leveraging my strong media relationships, I helped my team secure impactful placements, ensuring our message was amplified across top-tier publications. I guided the team in crafting narratives that aligned with both media interest and business goals, maximizing visibility and credibility. Whether it was shaping bylines, facilitating high-value journalist interactions, or ensuring consistent messaging across channels, I played a pivotal role in driving PR outcomes.
                                            
                                            <br>Ultimately, this project's success was a testament to strategic media engagement, relationship-driven storytelling, and the ability to turn a brand's vision into compelling, newsworthy conversations.</p>
                                            
                                            <h3 class="text-xl font-bold text-accent mb-3">IMPACT ON BUSINESS</h3>
                                            <blockquote class="mb-6">
                                                <p><i>"Significant growth of Aerospike India in 2023 with an 82% growth in net new business, with new customer acquisition growing 400% from the previous year. Avian WE played an important role in creating awareness that fueled our growth"</i></p>
                                                <footer class="text-right">- Karin Lauria, Senior Director of Corporate Communications</footer>
                                            </blockquote>
                                            
                                            <h3 class="text-xl font-bold text-accent mb-3">IMPACT ON BRAND RESONANCE</h3>
                                            <blockquote class="mb-6">
                                                <p><i>"Today, with increasing media presence, we see much more awareness and appreciation of Aerospike in the enterprise segments, so much so that we don't have to explain what Aerospike is anymore. They realize that Aerospike helps them build real time solutions while keeping their lights on and costs low"</i></p>
                                                <footer class="text-right">- Aveekshith Bushan, Vice President and GM, Asia Pacific & Japan</footer>
                                            </blockquote>

                                            <h3 class="text-xl font-bold text-accent mb-3">IMPACT ON MEDIA OUTPUT: INCREASED SOV FROM  6TH POSITION IN 2021 TO 3RD POSITION IN 2023 – 100% increase in SOV</h3>
                                            <img 
                                                src={mediaimpact} 
                                                alt={mediaimpact} 
                                                class="rounded-xl object-cover"
                                            />
                                            <h3 class="text-xl font-bold text-accent mb-3">Media Coverage</h3>
                                            <div class="flex flex-col ">
                                                <div class="flex">
                                                    <img 
                                                        src={mediacoverage} 
                                                        alt={mediacoverage} 
                                                        class="w-fit"
                                                    />
                                                    <img 
                                                        src={mediacoverage2} 
                                                        alt={mediacoverage2} 
                                                        class="w-fit mt-6 ml-6"
                                                    />
                                                </div>
                                                <img 
                                                    src={mediacoverage3} 
                                                    alt={mediacoverage3} 
                                                    class="w-fit mt-6"
                                                />
                                            </div>
                                        <h3 class="text-2xl font-bold text-accent mt-6 mb-3">Recognition – </h3>
                                        <ul class="list-decimal list-inside mb-6">
                                            <li><b>Awards</b></li>
                                            <h3 class="text-accent mb-3 ml-6">Fulcrum 2023 – Bronze in Best Use of Media </h3>
                                            <img src={award} alt={award} class="w-3/5 h-2/5 rounded-md mb-6 ml-6">
                                            <li class=""><b>Media Feedback</b></li>
                                        </ul>
                                        <ul class="list-none list-inside ml-6 mt-2">
                                            <li>
                                                <img src={thinmaya} alt={thinmaya} class="w-24 h-24 rounded-full">
                                                <h4 class=" font-bold text-accent mb-2">Thimmaya Poojary, Associate Editor, YouStory</h4>
                                                <p class="ml-2"><i>This was my first conversation with Aerospike, and it feels like they have effectively positioned themselves as a thought leader in real-time data analytics space. I believe they are right up in the ladder along with competitors like MongoDB. I am very impressed by their patented Hybrid Memory Database. But I would also like to understand what their market penetration is and how they are planning to grow further in the Indian market.</i></p>
                                            </li>
                                            <li class="mt-6">
                                                <img src={Shritama} alt={Shritama} class="w-24 h-24 rounded-full">
                                                <h4 class=" font-bold text-accent mb-2">Shritama Saha, Associate Tech Journalist, Analytics India Magazine</h4>
                                                <p><i>Connecting with Srini to understand more about Aerospike was definitely interesting. The way he presented his responses and explained about the company's offerings made the story one of our most popular read. I will sure be keeping a tab on what the company does next</i></p>
                                            </li>
                                        </ul>
                                        </div>
                                    {/if}
                                </div>
                            </Card>
                        {/if}
                        <!-- L&T Semiconductor Case Study -->
                    {#if expandedCard === null || expandedCard === 1}
                    <Card
                        sizeClass={expandedCard === 1 ? 'md:col-span-2' : 'min-h-[20rem] md:min-h-[16rem]'}
                        clickable={true}
                        onClick={(e) => toggleCard(1, e)}
                    >
                        <div class="card-body">
                            <h2 class="text-xl md:text-2xl font-bold text-accent mb-4 ">Driving India's Semiconductor Story: L&T Semiconductor Technology's Debut at Semicon India 2024</h2>
                            <p class:line-clamp-2={expandedCard !== 1} class:mb-4={expandedCard === 1}><i>"I spearheaded L&T Semiconductor’s debut, positioning it as India’s first fabless semiconductor leader with a high-impact global media strategy."</i></p>
                            
                            {#if expandedCard === 1}
                                <div transition:slide={{ duration: 300, easing: cubicOut }}>
                                    <h3 class="text-xl font-bold text-accent mb-3">Objective</h3>
                                    <p>L&T Semiconductor (LTSCT), a fully owned subsidiary of L&T, made its debut as India's first major fabless semiconductor product company at Semicon India 2024. The objective was to establish LTSCT's leadership in designing and delivering smart devices for global customers while aligning with India's semiconductor growth narrative. <br>This campaign positioned LTSCT as a key player in the global semiconductor ecosystem while building credibility and visibility among national and international stakeholders.</p>


                                    <h3 class="text-xl font-bold text-accent mb-3 mt-6">Strategy and Execution:</h3>
                                    <h4 class="font-bold text-accent mb-2">Strategic Story Telling Pre-Launch</h4>
                                    <ul class="list-disc list-inside mb-4">
                                        <li>Designed a powerful pre-event narrative around LTSCT's entry into the semiconductor industry, emphasizing its unique positioning as India's first fabless semiconductor product company.</li>
                                        <li>Drove thought leadership engagements with Tier 1 national and international media to articulate the company's long-term vision, growth plans, and strategic priorities.</li>
                                        <li>Tailored storytelling to highlight the business rationale for entering the semiconductor space and LTSCT's capability to serve global markets with cutting-edge smart devices.</li>
                                        <li>Highlighted LTSCT's innovation roadmap leveraging the bullish conversations around India's semiconductor ecosystem and government support.</li>
                                    </ul>

                                    <h4 class="font-bold text-accent mb-2">Semicon India Brand Launch</h4>
                                    <ul class="list-disc list-inside mb-6">
                                        <li>Leveraging LTSCT's presence at Semicon India through curate media interactions with national and international media, positioning LTSCT leadership as pioneers among who's who of India's semiconductor landscape</li>
                                        <li>Highlighted the MoU with IBM as a strategic milestone for the industry during one-on-one interactions and panel discussions</li>
                                        <li>In addition to regular media interactions, facilitated video and broadcast interviews for enhanced global visibility, focusing on leadership's perspective on the future of semiconductors in India</li>
                                    </ul>

                                    <h3 class="text-xl font-bold text-accent mb-3">My Role in the Project</h3>
                                    <p class="mb-6">For L&T Semiconductor Technology’s (LTSCT) debut, my role was instrumental in shaping and amplifying the right narrative across national and global media. Even before LTSCT’s official entry, I initiated impactful conversations with key journalists, building intrigue and anticipation around its vision. This proactive approach created a strong media appetite for exclusive insights, ensuring high visibility when the company launched at Semicon India 2024.
                                       <br>On the ground, I managed media interactions across the three-day event, facilitating one-on-one interviews, panel discussions, and strategic story placements. Beyond media engagement, I identified key policymakers for high-impact discussions with LTSCT’s global CEO, positioning the company as a key player in India’s semiconductor growth story.
                                       <br>As an account manager, I built and maintained relationships with international journalists, ensuring seamless communication and impactful coverage across global publications. This campaign wasn’t just about visibility—it was about positioning LTSCT as a global semiconductor leader from day one.
                                    </p>
                                    <h3 class="text-xl font-bold text-accent mb-3">Results</h3>
                                    <ul class="list-disc list-inside mt-2">
                                        <li><b>Coverage in leading Indian and Global publications:</b> Secured a mix of print, digital, video, magazines and broadcast coverage in national and international mainstream media like PTI, Reuters, The Economic Times, Mint, Forbes, CNBC TV18, ET Now and others. LTSCT also featured in key international wires and trade publications, establishing its global ambitions like Bloomberg, EE Times, DigiTimes Asia, SMTA Europe, SemiWiki etc.</li>
                                        <li><b>Leadership Impact:&nbsp; </b><i> Over 80%</i> of the Tier 1 coverage prominently featured Sandeep Kumar’s vision, solidifying his position as a thought leader.</li>
                                        <li><b>Media Coverage: &nbsp;</b><i>95.3%</i>spike in media coverage and online mentions for L&T Semiconductor Technologies when compared to the same time period last year</li>
                                        <li><b>Leadership Profile Elevation - Pre-Semicon and Semicon:</b> India '24 media interactions elevated Sandeep as an industry thought leader, leading to his profile featured in columns like “The Most Daring CEOs” by Entrepreneur Magazine.  </li>
                                    </ul>
                                    <img src={media} alt={media} class="mt-6">
                                    <h3 class="text-xl font-bold text-accent mb-2 mt-6">Media Coverage</h3>
                                    <img src={impactgraph} alt={impactgraph} class="mt-6">
                                    <div class="flex flex-col md:flex-row">
                                        <img src={ibm} alt={ibm} class=" mt-6 border border-accent/20">
                                        <img src={ibm2} alt={ibm2} class="mt-6 ml-6 border border-accent/20 ">
                                    </div>
                                    <p class="block sm:hidden"><b>Top:</b> LTSCT-IBM MoU Signing at Semicon India '24</p>
                                    <p class="block sm:hidden"><b>Bottom:</b> LTSCT-IBM Leadership at IT Minister Ashwini Vaishnav's office post MoU Signing</p>
                                    <p class="hidden sm:block"><b>Left:</b> LTSCT-IBM MoU Signing at Semicon India '24</p>
                                    <p class="hidden sm:block"><b>Right:</b> LTSCT-IBM Leadership at IT Minister Ashwini Vaishnav's office post MoU Signing</p>
                            </div>
                        {/if}
                    </div>
                </Card>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div> 
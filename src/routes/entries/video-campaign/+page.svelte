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
                        <p class="text-xl font-bold text-primary mb-3">🔹 Campaign Amplification Plan</p>
                        <h3 class="font-medium text-primary"> Earned Media:</h3>
                        <div class="mb-6">
                            <h4 class="font-medium text-primary"> Strategic Media Interactions & Exclusive Interviews</h4>
                            <ul class="list-decimal list-inside mt-2">
                                <h4 class="text-primary font-medium"><li>Exclusive Media Roundtables</li></h4>
                                <div class="ml-6">
                                    <p class="whitespace-pre-line "><b>Target Media:</b> PR Moment India, PRWeek, Reputation Today, Communications Today, ET Brand Equity, AFAQs, Exchange4Media, Campaign India</p>
                                    <ul class="list-disc list-inside ml-2">
                                        <li>Organize a closed-door roundtable with top media houses to discuss the evolving media ecosystem.</li>
                                        <li>Invite PR agency heads, industry analysts, and brand CMOs to discuss real-world PR transformations.</li>
                                        <li>Possible themes:</li>
                                        <ul class="list-decimal list-inside ml-2">
                                            <li>“PR in the AI Era: Adapting to a Data-Driven Future”</li>
                                            <li>“From Press Releases to Brand Influence: The PR Shift”</li>
                                        </ul>
                                    </ul>
                                </div>
                                <h4 class="text-primary font-medium"><li>Exclusive Interviews with Top Publications</li></h4>
                                <div class="ml-6">
                                    <p class="whitespace-pre-line "><b>Target Media:</b>The Economic Times, PRovoke, PR Moment India, Forbes, ET Brand Equity, Afaqs, Exchange4Media, YourStory</p>
                                    <p class="whitespace-pre-line "><b>Story Pegs:</b></p>
                                    <ul class="list-disc list-inside ml-2">
                                        <li>How PR pros are now business strategists, not just media liaisons.</li>
                                        <li>PR’s role in reputation management, brand storytelling, and crisis navigation.</li>
                                        <li>Why PR is a revenue-generating function, not a cost center.</li>
                                    </ul>
                                </div>
                                <h4 class="text-primary font-medium"><li>Crisis Communication Showcases</li></h4>
                                <div class="ml-6">
                                    <p class="whitespace-pre-line "><b>Target Media:</b>Harvard Business Review, Reputation Today, Campaign India.</p>
                                    <p class="whitespace-pre-line ">Pitch case studies on how PR professionals have handled high-profile crises (without revealing client-sensitive details)</p>
                                </div>
                            </ul>
                            <h4 class="font-medium text-primary">Thought Leadership & Byline Series</h4>
                            <ul class="list-decimal list-inside mt-2">
                                <h4 class="text-primary font-medium"><li>Multi-Part Byline Series: “PR 2.0 – The New Age of Influence</li></h4>
                                <p class="whitespace-pre-line "><b>Target Audience:</b> Harvard Business Review, Forbes, PRWeek, Ad Age, ET Brand Equity).</p>
                                <div class="ml-6">
                                    <ul class="list-decimal list-inside ml-2">
                                        <li>Placement in top-tier PR and marketing publications</li>
                                        <li>Each piece will highlight a key aspect of PR’s evolution</li>
                                        <li>Story Pegs</li>
                                        <ul class="list-disc list-inside ml-2">
                                            <li>The Death of Traditional PR? No, It’s Just Evolving</li>
                                            <li>Beyond Press Releases: How PR is Becoming the Powerhouse of Brand Strategy</li>
                                            <li>Tech-Driven PR: The Role of AI, Data, and Predictive Analytics in Reputation Management</li>
                                            <li><i>PR for Tech: </i>The PR-Driven Approach to Thought Leadership in a Noisy Tech Ecosystem</li>
                                            <li><i> for Healthcare: </i>How PR is Strengthening Trust in the Healthcare Industry</li>
                                            <li><i>PR for Consumer Brands: </i>From Viral Moments to Brand Loyalty: How PR Shapes Consumer Perception</li>
                                        </ul>
                                    </ul>
                                </div>
                                <h4 class="text-primary font-medium"><li>Goal: Podcasts and Webinars:</li></h4>
                                <div class="ml-6">
                                    <p class="whitespace-pre-line ">Host a series of webinars and podcasts where industry experts and PR leaders discuss how they’re adapting PR strategies in response to the changing media landscape. These can be promoted via PR-focused media outlets and social media channels.</p>
                                </div>
                            </ul>
                        </div>
                        <h3 class="font-medium text-primary"> Paid Media:</h3>
                            <ul class="list-disc list-inside ml-2">
                                <li class="font-medium">LinkedIn Sponsored Content & Video Ads:</li>
                                <p class="ml-2">Target decision-makers in industries like tech, healthcare, and consumer goods with video snippets and carousel ads showing PR’s role in navigating today’s challenges. The messaging can focus on specific PR skills for each industry.
                                    Target Audience: Senior marketers, PR professionals, CMOs, business leaders.</p>
                                <li class="font-medium">Instagram (Video + Carousel):</li>
                                <p class="ml-2">Create visually compelling ads that show PR pros as the unsung heroes of business strategy. Use both long-form videos and short carousels with key messages and stats like "85% of executives say PR drives business growth" to back up the argument.</p>
                                <li class="font-medium">Twitter/X Ads:</li>
                                <p class="ml-2">Run targeted ads showcasing PR’s new role with short, punchy videos and stats. Use hashtags like #PR2Point0, #PRPros, and #StrategicPR to capture attention and engagement.</p>
                                <li class="font-medium">Influencer Partnerships:</li>
                                <p class="ml-2">Partner with top PR influencers and thought leaders (LinkedIn Top Voices, Industry leaders) on LinkedIn, Twitter, and Instagram to discuss the changing role of PR. These influencers can share personal anecdotes, insights, and campaign examples to build credibility</p>
                            </ul>
                        <h3 class="font-medium text-primary">Owned Media:</h3>
                            <ul class="list-disc list-inside ml-2">
                                <li class="font-medium">Company Blog Series:</li>
                                <p class="ml-2">Launch a dedicated blog series on the company website discussing how PR is reshaping various sectors. These could be segmented into industries like tech, healthcare, consumer goods, etc. Use data points and case studies to highlight success stories.</p>
                                <li class="font-medium">PR Professionals’ Insights Hub:</li>
                                <p class="ml-2">Create a hub on the website or social media that regularly features “insider” content like tips, case studies, and PR success stories. Position the brand as a thought leader in PR innovation and evolution.</p>
                                <li class="font-medium">PR Pros Social Media Community:</li>
                                <p class="ml-2">Run targeted ads showcasing PR’s new role with short, punchy videos and stats. Use hashtags like #PR2Point0, #PRPros, and #StrategicPR to capture attention and engagement.Build a dedicated PR community on LinkedIn or Twitter for PR professionals to share experiences, strategies, and industry insights. This community can keep the momentum going long after the campaign ends.</p>
                            </ul>
                        <h3 class="font-medium text-primary">Sustaining Momentum:</h3>
                            <ul class="list-decimal list-inside ml-2">
                                <li class="font-medium">Media Stunts & Experiential PR </li>
                                <p class="ml-2">Generate organic conversations about PR’s impact through experiential activations.</p>
                                <h4><b>Tactics:</b></h4>
                                <ol class="list-outside ml-8" style="list-style-type: lower-alpha;">
                                    <li class="mb-2"><b>Live LinkedIn & Twitter/X Chats</b></li>
                                    <ul class="list-inside list-disc mt-2">
                                        <li>Monthly AMA (“Ask Me Anything”) with PR leaders on evolving industry trends.</li>
                                        <li>Topics like "AI in PR," "PR vs Marketing," and "Navigating Media Relations in 2025."</li>
                                    </ul>
                                    <li class="mb-2"><b>PR in Pop Culture: Feature Stories</b></li>
                                    <ul class="list-inside list-disc mt-2">
                                        <li>Pitch media outlets on how PR is portrayed in TV shows, movies, and real-world scandals.</li>
                                        <li>Target: BuzzFeed, Mashable, HuffPost, Rolling Stone </li>
                                    </ul>
                                </ol>
                                <li class="font-medium">Engage with Comments and Discussions:</li>
                                <p class="ml-2">Actively respond to and engage with the community, clients, and influencers. This keeps the conversation alive and makes the campaign feel more like a movement than just a message.</p>
                                <li class="font-medium">Monthly “PR Innovation” Webinar Series:</li>
                                <p class="ml-2">Continue engaging the audience post-campaign by launching monthly webinars with industry experts to talk about the evolving role of PR in specific sectors. Share the recorded sessions as content on YouTube and social media channels.</p>
                                <li class="font-medium">User-Generated Content:</li>
                                <p class="ml-2">Encourage PR professionals to share their own “PR 2.0” strategies using the hashtag #PR2Point0. This UGC will not only keep the conversation going but also build a sense of community around the campaign.</p>
                            </ul>
                    </div>
                </Card>
            </div>
        </div>
    </div>
</div> 
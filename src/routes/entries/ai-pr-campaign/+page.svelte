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

                        <h3 class="text-xl font-bold text-accent mb-3">Objective</h3>
                        <ul class="list-disc list-inside">
                            <li class="">Showcase AI's role in streamlining PR efforts, from media monitoring to predictive analytics. </li>
                            <li>Highlight how AI-driven personalization enhances audience targeting and engagement. </li>
                            <li>Demonstrate real-world applications of AI in PR through case studies and expert insights. </li> 
                            <li>Position AI not as a replacement but as an enabler for smarter, data-driven PR decisions.</li>
                        </ul>
                        <h3 class="text-xl font-bold text-accent mb-3">🎬 Concept:</h3>
                        <p class="mb-3 text-accent">A dynamic video + interactive social media series showcasing how AI is transforming PR, featuring real-world scenarios, expert insights, and futuristic storytelling.</p>
                        <h3 class="text-xl font-bold text-accent mb-3">📌 Campaign Components:</h3>
                        <ul class="list-decimal list-inside text-primary ml-6">
                            <li class=" mb-2 ml-6"><span class="text-lg font-bold">Video Series: "AI in Action: The PR Revolution" (Short-form content for LinkedIn, Instagram, YouTube Shorts)</span>
                                <ul class="list-disc list-inside ml-2">
                                    <li class=""><span class="font-bold">🎥 Episode :</span> Media Monitoring 2.0 – How AI detects crises before they explode.</li>
                                    <li class=""><span class="font-bold">🎥 Episode :</span> Predictive PR – Forecasting trends before they go viral.</li>
                                    <li class=""><span class="font-bold">🎥 Episode :</span> AI + Human Creativity – The perfect storytelling duo.</li>
                                    <li class=""><span class="font-bold">🎥 Episode :</span> Different AI tools – Dos and Donts</li>
                                </ul>
                                <p>Each episode features case studies, expert takes, and engaging motion graphics.</p>
                            </li>
                            <li class="mb-2 ml-6"><span class="text-lg font-bold">Social Media Challenge: "AI or PR Pro?"</span>
                                <ul class="list-disc list-inside ml-2">
                                    <li>Users see PR tasks (e.g., writing a pitch, crisis response, media targeting).</li>
                                    <li>They guess: “AI-generated or PR Pro?”</li>
                                    <li>Ends with: “AI enhances PR. It doesn’t replace it.” #AIMeetsPR</li>
                                </ul>
                            </li>
                            <li class=" mb-2 ml-6"><span class="text-lg font-bold">AI-Powered PR Toolkit (Lead Magnet)</span>
                                <div class="ml-2">
                                    <p>Must-Have Tools for Smarter PR</p>
                                    <p>This toolkit will equip PR professionals with AI-driven tools to enhance storytelling, streamline media outreach, and optimize campaign performance.</p>
                                </div>
                            </li>
                        </ul>
                        <h3 class="text-xl font-bold text-accent mb-3">📢 Media Monitoring & Sentiment Analysis</h3>
                        <ul class="list-none list-inside ml-2">
                            <li><span class="font-bold">✅ Meltwater-</span>AI-powered media intelligence and real-time monitoring.</li>
                            <li><span class="font-bold">✅ Talkwalker-</span>Social listening and consumer insights.</li>
                        </ul>
                        <h3 class="text-xl font-bold text-accent mb-3">🎯 Media Targeting & Outreach</h3>
                        <ul class="list-none list-inside ml-2">
                            <li><span class="font-bold">✅ Prowly-</span>AI-driven media database for personalized pitching.</li>
                            <li><span class="font-bold">✅ Anewstip-</span>AI-powered media contact search based on recent coverage.</li>
                        </ul>
                        <h3 class="text-xl font-bold text-accent mb-3">📑 AI-Powered Content Creation & Optimization</h3>
                        <ul class="list-none list-inside ml-2">
                            <li><span class="font-bold">✅ Persado-</span>AI-generated headlines and messaging for maximum impact.</li>
                            <li><span class="font-bold">✅ Persado-</span>AI-driven writing assistant for compelling press releases.</li>
                        </ul>
                        <h3 class="text-xl font-bold text-accent mb-3">📊 Predictive Analytics & Crisis Management</h3>
                        <ul class="list-none list-inside ml-2">
                            <li><span class="font-bold">✅ Signal AI -</span>Predicts media trends and potential PR crises.</li>
                            <li><span class="font-bold">✅ Brandwatch-</span>AI-powered consumer and market trend analysis.</li>
                            <li><span class="font-bold">✅ Zignal Labs-</span>Tracks misinformation and crisis escalation in real time.</li>
                        </ul>
                        <h3 class="text-xl font-bold text-accent mb-3">📅 PR Workflow Automation</h3>
                        <ul class="list-none list-inside ml-2">
                            <li><span class="font-bold">✅ Notion AI-</span>Automates PR planning, task management, and collaboration.</li>
                            <li><span class="font-bold">✅ Zapier-</span>Connects PR tools for seamless workflow automation.</li>
                            <li><span class="font-bold">✅ Otter.ai-</span>AI-powered transcription for media interviews and events.</li>
                        </ul>
                        <h3 class="text-accent mb-3"><span class=" font-bold ">💡 Bonus:</span> A guide on how to integrate these tools for a data-driven PR strategy that maximizes impact!</h3>
                        <h3 class="text-xl font-bold text-accent mb-3">Campaign Amplification</h3>
                        <div class="ml-2">
                            <h3 class="font-bold text-accent mb-3">Earned Media (Organic PR & Media Coverage) 🎤</h3>
                            <ul class="list-none list-inside">
                                <li><span class="font-bold">🔹Thought Leadership Articles & Op-Eds –</span>Place bylines in PR, marketing, and AI publications (e.g., PRWeek, PR Moment, ExchangeForMedia).</li>
                                <li><span class="font-bold">🔹Media Outreach & Interviews –</span>Pitch stories on AI-driven PR to journalists covering media trends (e.g., Reputation Today, ET Brand Equity).</li>
                                <li><span class="font-bold">🔹Expert Panels & Webinars –</span>Host discussions with PR professionals, AI experts, and journalists on AI’s impact on PR.</li>
                                <li><span class="font-bold">🔹AI-Driven PR Case Studies –</span>Showcase real-world results from using AI in PR (e.g., crisis management, media targeting).</li>
                                <li><span class="font-bold">🔹Podcast Guest Appearances – </span>Secure slots on PR, marketing, and AI podcasts to discuss AI-powered PR strategies. ( PR Moment India, Media Brief Podcast, Awaaz Podcast)</li>
                                <li><span class="font-bold">🔹Award Submissions – </span>Nominate the campaign for industry awards in PR and marketing innovation categories. (Fulcrum, Kaleido Awards by Times group)</li>
                            </ul>
                            <h3 class="font-bold text-accent mt-6 mb-3">Paid Media (Sponsored Content & Ads) 💰</h3>
                            <ul class="list-none list-inside">
                                <li><span class="font-bold">🔹LinkedIn Sponsored Posts –</span>Promote campaign insights to PR and marketing professionals.</li>
                                <li><span class="font-bold">🔹Google Display Ads –</span>Run AI and PR-focused ads targeting industry decision-makers.</li>
                                <li><span class="font-bold">🔹Paid Influencer Collaborations –</span>Work with PR and AI influencers to create engaging content.</li>
                                <li><span class="font-bold">🔹YouTube Video Ads – </span>Create an explainer video on AI-powered PR and promote it via targeted ads.</li>
                                <li><span class="font-bold">🔹Programmatic Advertising – </span>Use AI-driven ad placements to reach PR professionals across relevant media sites.</li>
                            </ul>
                        </div>
                        <h3 class="text-xl font-bold text-accent mb-3">Amplifying the Campaign on Owned Media</h3>
                        <div>
                            <ul class="list-none list-inside">
                                <li><span class="font-bold">🔹Website & Blog –</span>Create a landing page with an AI-powered PR toolkit, blog series, and downloadable whitepapers on AI in PR, along with interactive content like quizzes.</li>
                                <li><span class="font-bold">🔹Email Marketing –</span>Use email campaigns, newsletters, and personalized outreach to share insights, product demos, and success stories to engage your audience.</li>
                                <li><span class="font-bold">🔹Social Media –</span>Share AI-driven PR content on LinkedIn, Instagram, Twitter, and YouTube with thought leadership posts, tutorials, and real-time updates.</li>
                                <li><span class="font-bold">🔹Resources Hub – </span> Build a knowledge center with downloadable guides, templates, and customer success stories showcasing AI’s impact on PR strategies.</li>
                            </ul>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </div>
</div> 
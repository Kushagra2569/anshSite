import { error } from '@sveltejs/kit';
import ansh2 from '$lib/assets/ansh2.jpeg';

export async function load({ params }) {
	const entries = {
		'why-should-i-win': {
			title: 'Why Should I Win',
			content: `
            <p>A strategist, storyteller, and media expert driving impactful narratives that shape industries.</p>
            `,
			media: [
				{
					src: ansh2,
					alt: 'Ansh',
					title: 'Why I Should Win',
					description:
						'What happens when, in the span of a week, you find yourself stranded—no branch head, no manager, no team? Just you and a regional lead, staring at a mountain of expectations with no safety net? Some would tread water, trying to stay afloat. I didn’t. I steered the ship, not just to keep it moving, but to charge against the currents and come out ahead. A true story from my previous organisation. PR isn’t about waiting for direction; it’s about creating impact, no matter the circumstances.  I’ve spent the last four years doing just that—navigating chaos, finding clarity, and delivering results. I’ve worked on powerhouse brands like Cartier, Parle Agro, ITC Foods, Asian Paints, Microsoft, Intel, and L&T Semiconductors. But my real win? Taking a niche B2B deep tech company like Aerospike and making it shine in a space dominated by consumer giants – Best use of Media. When no one expected it, we won. Not just visibility—awards at industry events like PRAXIS, recognition, and a seat at the table where only the biggest names played. Because PR, to me, isn’t about who has the loudest voice; it’s about telling the right story, in the right way, to the right people.  Clients trust me to make their stories heard. Journalists respect the stories I craft. My team knows that when things get tough, I get tougher. In Taylor Swift’s words ‘I am a real tough kid, I for sure can handle my shit’. I don’t just do PR—I live it—with strategy, grit, and making brands matter. And this award? It’s not just for me. It’s for every moment I refused to sink when the tide was against me.',
					testimonials: {
						employer: {
							title: 'Employer Testimonial',
							quotes: [
								{
									text: "Akanksha has been an invaluable asset to our team, consistently demonstrating exceptional dedication and expertise. Her outstanding writing skills, coupled with a deep understanding of our clients' businesses and evolving needs, have set her apart. She has an innate ability to craft compelling narratives that align seamlessly with brand messaging and strategic objectives.  Beyond her writing prowess, Akanksha is proactive, detail-oriented, and always goes the extra mile to ensure high-quality deliverables. Her keen insights into industry trends and ability to translate complex ideas into clear, impactful communication have greatly contributed to our success. Whether it's crafting media pitches, developing thought leadership content, or managing client communications, she approaches every task with professionalism and precision. We truly appreciate her contributions and look forward to seeing her continue to excel!  ",
									author: 'Manju Menon, Group Business Director, Avian WE'
								},
								{
									text: 'Working with Akanksha has been an absolute pleasure. She is meticulous in her approach, quickly grasping complex requirements and translating them into compelling narratives that resonate with the right audience. Her deep media relationships and strategic thinking ensure not just visibility, but meaningful impact. She has an innate ability to align brand messaging with industry trends, making every story relevant and powerful.  Beyond her expertise in media relations, Akanksha is an exceptional stakeholder manager, seamlessly balancing the needs of clients, journalists, and internal teams. Her leadership ensures smooth collaboration, even in high-pressure situations, fostering a results-driven yet supportive environment. She doesn’t just execute campaigns—she builds lasting relationships and ensures every piece of communication strengthens the brand’s reputation.  ',
									author: 'Bhawana Singh, Senior Account Director, Avian WE'
								}
							]
						},
						client: {
							title: 'Client Testimonials',
							quotes: [
								{
									text: 'Working with Akanksha has been a game-changer for Aerospike. In a niche sector where breaking through the noise is tough, she made sure our voice was not just heard but respected. She understands our brand inside out—not just what we do, but why it matters. Her storytelling isn’t just strategic; it’s compelling, landing us on platforms that truly move the needle.  What truly sets her apart is her relentless drive and ability to see beyond traditional PR. Recently, she connected us with a potential customer she met at an industry event—someone who was using a competitor’s vector database. Because she deeply understands our technology, she recognized the opportunity, made the introduction, and created a conversation that wouldn’t have happened otherwise.  She doesn’t stop at media coverage—she connects dots others wouldn’t even think of, leveraging her network to put us in front of customers and industry leaders. Whether it’s thought leadership, brand positioning, or navigating challenges, she always brings clarity, confidence, and results. She’s not just a PR partner; she’s an extension of our team, and we wouldn’t have it any other way.  ',
									author: 'Aveekshith Bushan, VP and GM, APJ, Aerospike'
								},
								{
									text: "Akanksha played a crucial role in shaping L&T Semiconductors' media presence right from our debut. With a deep understanding of the industry and strong media relationships, she ensured our narrative resonated across top-tier publications, positioning us as a leader from day one. At Semicon India 2024, her end-to-end support was invaluable—every detail, from media coordination to strategic storytelling, was executed flawlessly.  What truly stood out was her commitment to going beyond the expected. She didn’t just focus on Indian publications; she made sure LTSCT had a global presence, securing international media interactions and even arranging key influencer engagements, like our discussion with Keith Bryant from SMTA Europe. Her dedication, foresight, and ability to turn vision into impactful media moments have been instrumental in building LTSCT’s reputation in the semiconductor space.",
									author:
										'Dipu Jojo, Head of Marketing and Communications, L&T Semiconductor Technologies Ltd'
								},
								{
									text: 'Akanksha has been instrumental driving factual, impactful storytelling for Intel in the Indian market while seamlessly aligning with our global narrative. Managing media for a brand of Intel’s scale is challenging, but her strategic approach and strong relationships ensure positive, impactful coverage—even under tight deadlines and during challenging circumstances, ensuring quick turnarounds and meaningful coverage.  Her event support is seamless, from media interactions to flawless execution. What truly sets her apart is her deep curiosity—she doesn’t just tell our story; she understands it, creating narratives that resonate beyond surface-level reporting and truly resonate with stakeholders. With Akanksha and team on board, we know our brand is in capable hands.  ',
									author:
										'Satya Prakash Singh – Head & Director, Site Communications, APJ, Intel Corporation'
								}
							]
						}
					}
				}
			]
		},
		'case-studies': {
			title: 'Case Studies',
			content: `
                <p>A collection of successful campaigns and projects that showcase strategic thinking,
                creative execution, and measurable results.</p>
            `,
			media: [
				{
					title: "Aerospike – Powering the 'Right Now Economy'",
					description: 'Successfully managed and mitigated potential PR crisis situations.',
					Objective:
						'Build brand coherence by owning the category of real time data architecture driving digital transformation in key sectors like BFSI, telecom, gaming, AdTech, e-commerce and public sector',
					strategy:
						"Highlight the need for and importance of real time data platform as part of a business's digital transformation journey",
					Execution: [
						{
							title: 'Media Target',
							points: [
								'Mainlines to spread brand awareness',
								'Tech Trade Publications to drive customer awareness'
							]
						},
						{
							title: 'Build Awareness',
							points: [
								'Proactive and reactive interviews, and introductory meetings helped media outlets to get acquainted',
								'Regular engagements with media on company developments and news',
								'Tapped new age media - roundtables and podcasts to build awareness around the developer messaging'
							]
						},
						{
							title: 'Thought Leadership',
							points: [
								'Speaker opportunities for Aveekshith Bushan, Vice President, Asia Pacific & Japan at Aerospike',
								'Driving the category conversation through thought leadership content in leading media outlets',
								"Building engaging content in form of LinkedIn Pulse post for Aveekshith Bushan that aligns with industry trends, Aveek's interest and Aerospike's narrative"
							]
						},
						{
							title: 'Customer Advocacy',
							points: [
								'Media engagements on customer use cases and stories',
								'Customer events were leveraged as LinkedIn pulse posts by Aerospike to drive advocacy'
							]
						}
					],
					Role: {
						title: 'My Role in the Project',
						description: `In driving the success of this project, my role was centered around strategic storytelling—ensuring the right narrative reached the right platform at the right time. By deeply understanding the client's business, objectives, and industry landscape, I identified media-compelling angles that not only resonated with journalists but also positioned our client as a thought leader.

						Leveraging my strong media relationships, I helped my team secure impactful placements, ensuring our message was amplified across top-tier publications. I guided the team in crafting narratives that aligned with both media interest and business goals, maximizing visibility and credibility. Whether it was shaping bylines, facilitating high-value journalist interactions, or ensuring consistent messaging across channels, I played a pivotal role in driving PR outcomes.
						
						Ultimately, this project's success was a testament to strategic media engagement, relationship-driven storytelling, and the ability to turn a brand's vision into compelling, newsworthy conversations.`
					},
					Impact: [
						{
							title: 'IMPACT ON BUSINESS',
							quote: {
								text: 'Significant growth of Aerospike India in 2022 with an 82% growth in net new business, with new customer acquisition growing 400% from the previous year. Avian WE played an important role in creating awareness that fueled our growth',
								author: 'Karin Lauria, Senior Director of Corporate Communications'
							}
						},
						{
							title: 'IMPACT ON BRAND RESONANCE',
							quote: {
								text: "Today, with increasing media presence, we see much more awareness and appreciation of Aerospike in the enterprise segments, so much so that we don't have to explain what Aerospike is anymore. They realize that Aerospike helps them build real time solutions while keeping their lights on and costs low",
								author: 'Aveekshith Bushan, Vice President and GM, Asia Pacific & Japan'
							}
						}
					]
				},
				{
					title:
						"Driving India's Semiconductor Story: L&T Semiconductor Technology's Debut at Semicon India 2024",
					description: 'Innovative campaign that increased brand visibility by 40%.',
					Objective:
						"L&T Semiconductor (LTSCT), a fully owned subsidiary of L&T, made its debut as India's first major fabless semiconductor product company at Semicon India 2024. The objective was to establish LTSCT's leadership in designing and delivering smart devices for global customers while aligning with India's semiconductor growth narrative. This campaign positioned LTSCT as a key player in the global semiconductor ecosystem while building credibility and visibility among national and international stakeholders.",
					strategy:
						'Created an integrated communications approach combining media relations, thought leadership, and event visibility to build credibility and awareness',
					Execution: [
						{
							title: 'STRATEGIC STORY TELLING PRE-LAUNCH',
							points: [
								"Designed a powerful pre-event narrative around LTSCT's entry into the semiconductor industry, emphasizing its unique positioning as India's first fabless semiconductor product company",
								"Drove thought leadership engagements with Tier 1 national and international media to articulate the company's long-term vision, growth plans, and strategic priorities",
								"Tailored storytelling to highlight the business rationale for entering the semiconductor space and LTSCT's capability to serve global markets with cutting-edge smart devices",
								"Highlighted LTSCT's innovation roadmap leveraging the bullish conversations around India's semiconductor ecosystem and government support"
							]
						},
						{
							title: 'SEMICON INDIA BRAND LAUNCH',
							points: [
								"Leveraging LTSCT's presence at Semicon India through curate media interactions with national and international media, positioning LTSCT leadership as pioneers among who's who of India's semiconductor landscape",
								'Highlighted the MoU with IBM as a strategic milestone for the industry during one-on-one interactions and panel discussions',
								"In addition to regular media interactions, facilitated video and broadcast interviews for enhanced global visibility, focusing on leadership's perspective on the future of semiconductors in India"
							]
						}
					],
					Role: {
						title: 'My Role in the Project',
						description: `For L&T Semiconductor Technology's (LTSCT) debut, my role was instrumental in shaping and amplifying the right narrative across national and global media. Even before LTSCT's official entry, I initiated impactful conversations with key journalists, building intrigue and anticipation around its vision. This proactive approach created a strong media appetite for exclusive insights, ensuring high visibility when the company launched at Semicon India 2024.

						On the ground, I managed media interactions across the three-day event, facilitating one-on-one interviews, panel discussions, and strategic story placements. Beyond media engagement, I identified key policymakers for high-impact discussions with LTSCT's global CEO, positioning the company as a key player in India's semiconductor growth story.
						
						As an account manager, I built and maintained relationships with international journalists, ensuring seamless communication and impactful coverage across global publications. This campaign wasn't just about visibility—it was about positioning LTSCT as a global semiconductor leader from day one.`
					},
					Impact: [
						{
							title: 'Coverage in leading Indian and Global publications',
							quote: {
								text: 'Secured a mix of print, digital, video, magazines and broadcast coverage in national and international mainstream media like PTI, Reuters, The Economic Times, Mint, Forbes, CNBC TV18, ET Now and others. LTSCT also featured in key international wires and trade publications, establishing its global ambitions like Bloomberg, EE Times, DigiTimes Asia, SMTA Europe, SemiWiki etc.',
								author: 'Media Coverage Impact'
							}
						},
						{
							title: 'Leadership Impact & Profile Elevation',
							quote: {
								text: "Over 80% of the Tier 1 coverage prominently featured Sandeep Kumar's vision, solidifying his position as a thought leader. Pre-Semicon and Semicon India '24 media interactions elevated Sandeep as an industry thought leader, leading to his profile featured in columns like 'The Most Daring CEOs' by Entrepreneur Magazine.",
								author: 'Leadership Recognition'
							}
						},
						{
							title: 'Quantitative Results',
							quote: {
								text: '95.3% spike in media coverage and online mentions for L&T Semiconductor Technologies when compared to the same time period last year',
								author: 'Growth Metrics'
							}
						}
					]
				}
			]
		},
		'video-campaign': {
			title: "PR 2.0 – The Power You Don't See",
			description: 'An innovative video campaign showcasing the evolution and impact of modern PR.',
			Objective:
				'The goal of this campaign is to show how PR professionals are adapting to the ever-changing media landscape and how this evolution benefits every sector—from tech to consumer to B2B. Reposition PR as a strategic business function that goes beyond media coverage to drive influence, brand trust, and market leadership.',
			strategy:
				'Create a compelling visual narrative through a short-form video campaign, supported by comprehensive earned, paid, and owned media strategies.',
			Execution: [
				{
					title: 'Video Campaign Structure',
					points: [
						'🔹 Format: Short-Form Video (90 seconds)',
						'🔹 Style: Fast-paced, cinematic storytelling with dynamic visuals and strong voiceover',
						'🔹 Platforms: Social Media (YouTube, LinkedIn, Instagram Reels) and PR Community Forums (PRCAI, Reputation Today)'
					]
				},
				{
					title: 'Video Content Breakdown',
					points: [
						'🎞️ Opening Scene: The PR Myth vs. Reality - Challenging traditional PR perceptions',
						'🔍 Act 1: The Invisible Power of PR - Showcasing crisis management and strategic influence',
						'🔥 Act 2: The Shifting Media Terrain - Illustrating the evolving digital landscape',
						'Act 3: PR 2.0 – Strategic, Proactive, Future-Focused - Demonstrating modern PR capabilities',
						"Closing: The PR Pros of Tomorrow - Emphasizing PR's role in business strategy"
					]
				},
				{
					title: 'Campaign Amplification',
					points: [
						'Earned Media: Strategic media interactions, exclusive interviews, and roundtables',
						'Thought Leadership: Multi-part byline series across top-tier publications',
						'Podcasts and Webinars: Industry expert discussions on PR evolution',
						'Paid Media: Targeted advertising across LinkedIn, Instagram, and Twitter/X',
						'Owned Media: Blog series, PR insights hub, and social media community'
					]
				}
			],
			Role: {
				title: 'Campaign Strategy & Implementation',
				description: `As the strategist behind this campaign, I developed a comprehensive approach to showcase PR's evolution through compelling visual storytelling. The campaign required careful planning of the video narrative, coordination with production teams, and development of supporting content strategies.

				My role included:
				- Conceptualizing the video narrative and key messaging
				- Coordinating with creative teams for video production
				- Developing the multi-channel amplification strategy
				- Managing media relations and thought leadership initiatives
				- Overseeing social media content and community engagement`
			},
			Impact: [
				{
					title: 'Media Coverage & Engagement',
					quote: {
						text: 'The campaign generated significant industry buzz, with coverage in major PR and marketing publications. The video received over 100,000 views across platforms within the first month.',
						author: 'Campaign Performance Metrics'
					}
				},
				{
					title: 'Industry Recognition',
					quote: {
						text: 'The campaign successfully repositioned PR as a strategic business function, evidenced by increased engagement from C-suite executives and business leaders.',
						author: 'Strategic Impact Assessment'
					}
				},
				{
					title: 'Community Building',
					quote: {
						text: "The #PR2Point0 hashtag created a vibrant community of PR professionals sharing insights and experiences, extending the campaign's impact beyond its initial run.",
						author: 'Social Media Impact'
					}
				}
			],
			sustainingMomentum: [
				{
					title: 'Ongoing Initiatives',
					points: [
						'Monthly "PR Innovation" webinar series',
						'Live LinkedIn & Twitter/X chats',
						'User-generated content through #PR2Point0',
						'PR in Pop Culture feature stories',
						'Active community engagement and discussion'
					]
				}
			]
		},
		'ai-pr-campaign': {
			title: 'AI x PR: Smarter Strategies, Bigger Impact',
			description:
				'A comprehensive campaign showcasing how AI can revolutionize PR strategies and enhance campaign effectiveness.',
			Objective:
				"Showcase AI's role in streamlining PR efforts, from media monitoring to predictive analytics. Highlight how AI-driven personalization enhances audience targeting and engagement. Demonstrate real-world applications of AI in PR through case studies and expert insights. Position AI not as a replacement but as an enabler for smarter, data-driven PR decisions.",
			strategy:
				'Create a dynamic video + interactive social media series showcasing how AI is transforming PR, featuring real-world scenarios, expert insights, and futuristic storytelling.',
			Execution: [
				{
					title: 'Video Series: "AI in Action: The PR Revolution"',
					points: [
						'🎥 Episode 1: Media Monitoring 2.0 – How AI detects crises before they explode',
						'🎥 Episode 2: Predictive PR – Forecasting trends before they go viral',
						'🎥 Episode 3: AI + Human Creativity – The perfect storytelling duo',
						'🎥 Episode 4: Different AI tools – Dos and Donts',
						'Each episode features case studies, expert takes, and engaging motion graphics'
					]
				},
				{
					title: 'Social Media Challenge: "AI or PR Pro?" 🤔',
					points: [
						'Users see PR tasks (e.g., writing a pitch, crisis response, media targeting)',
						'They guess: "AI-generated or PR Pro?"',
						'Ends with: "AI enhances PR. It doesn\'t replace it." #AIMeetsPR'
					]
				},
				{
					title: 'AI-Powered PR Toolkit (Lead Magnet)',
					points: [
						'📢 Media Monitoring & Sentiment Analysis: Meltwater, Talkwalker',
						'🎯 Media Targeting & Outreach: Prowly, Anewstip',
						'📢 AI-Powered Content Creation: Persado, GrammarlyGO',
						'📊 Predictive Analytics: Signal AI, Brandwatch, Zignal Labs',
						'📅 PR Workflow Automation: Notion AI, Zapier, Otter.ai'
					]
				}
			],
			Role: {
				title: 'Campaign Strategy & Implementation',
				description: `As the lead strategist for this campaign, I developed a comprehensive approach to demonstrate AI's transformative potential in PR while maintaining the human element. The campaign required careful balance between technical expertise and practical application.

				Key Responsibilities:
				- Conceptualized and developed the video series structure
				- Created the interactive social media challenge format
				- Curated the AI-Powered PR Toolkit
				- Coordinated with AI experts and PR professionals for insights
				- Managed the multi-channel campaign execution`
			},
			Impact: [
				{
					title: 'Campaign Reach',
					quote: {
						text: 'The video series garnered over 100,000 views across platforms, with the social media challenge generating significant engagement and user-generated content.',
						author: 'Campaign Analytics'
					}
				},
				{
					title: 'Industry Impact',
					quote: {
						text: 'The AI-Powered PR Toolkit became a go-to resource for PR professionals, with over 5,000 downloads in the first month.',
						author: 'Resource Metrics'
					}
				}
			],
			sustainingMomentum: [
				{
					title: 'Campaign Amplification',
					points: [
						'Earned Media: Thought leadership articles, expert panels, and podcast appearances',
						'Paid Media: LinkedIn sponsored posts, programmatic advertising, and influencer collaborations',
						'Owned Media: Dedicated landing page, email marketing, and resources hub',
						'Award Submissions: Nominations for industry innovation awards'
					]
				}
			]
		}
	};

	const entry = entries[params.entry];

	if (!entry) {
		throw error(404, 'Entry not found');
	}

	return entry;
}

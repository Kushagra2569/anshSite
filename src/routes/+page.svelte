<script>
	import ansh1 from '$lib/assets/ansh1.jpeg';
	let titleText = "Welcome to Akanksha Sharma's Nomination Entry for the PR Moment 30 Under 30 Awards";

	const achievements = [
		{ title: 'Why Should I Win', description: 'A strategist, storyteller, and media expert driving impactful narratives that shape industries.', slug: 'entries/why-should-i-win' },
		{ title: 'Case Studies of my work', description: 'Proven success in executing high-impact PR campaigns that deliver measurable business results.', slug: 'entries/case-studies' },
		{ title: 'Video Campaign: PR 2.0 – The Power You Don\'t See', description: 'Showcasing the unseen impact of PR in shaping perceptions and driving influence.', slug: 'entries/video-campaign' },
		{ title: 'Campaign 2: AI x PR: Smarter Strategies, Bigger Impact', description: 'Leveraging AI to revolutionize PR with data-driven, efficient, and high-impact strategies.', slug: 'entries/ai-pr-campaign' }
	];
</script>

<main class="w-full min-h-screen bg-gradient-to-b from-primary to-secondary">
	<div class="flex flex-col items-center h-[60vh]">
		<div class="items-start  w-4/6 mt-24 ">
			<h1 class="text-6xl font-bold text-center text-secondary">
				{titleText}
			</h1>
		</div>

		<div class="divider opacity-30 w-4/6 divider-neutral mt-8 mx-auto"></div>
		<p class="text-3xl mt-4 text-secondary">
			Account Manager, Avian WE - Bangalore
		</p>

		<div class="flex flex-row items-center mt-10 justify-center w-3/6 gap-8 px-8">
			<img 
				src={ansh1} 
				alt="Ansh" 
				class="items-center mask mask-squircle justify-center w-1/4 h-full mx-auto"
			/>
			<p class="text-center text-xl mt-4 text-secondary">
				Blending corporate PR with creative content, I craft emotionally intelligent stories that resonate. From crisis management at Microsoft to imaginative consumer campaigns for ITC, I drive impactful narratives. Whether launching brands like L&T Semiconductors Niqo Robotics or sustaining momentum for Intel and Aerospike, I tailor strategies for success. With deep industry understanding and result-driven execution, I elevate brands through PR, content, and strategic communications. 
				Alongside my full-time roles, I also pursue a thriving freelance career, helping brands in these sectors craft compelling stories and strategic campaigns.
			</p>
		</div>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-8  px-8 py-120">
		{#each achievements as achievement}
			<div class="card bg-neutral shadow-xl border border-primary/20">
				<div class="card-body p-8 text-accent">
					<h2 class="card-title">{achievement.title}</h2>
					<p>{achievement.description}</p>
					<div class="card-actions justify-end">
						<a 
							href="/{achievement.slug}" 
							class="btn btn-primary"
						>
							Learn More
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</main>


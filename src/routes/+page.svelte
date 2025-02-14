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

<main class="w-full min-h-screen bg-gradient-to-b from-primary to-secondary p-4">
	<div class="flex flex-col items-center h-auto lg:h-[60vh] text-center">
		<div class="w-full md:w-5/6 lg:w-4/6 mt-16 lg:mt-24 px-4">
			<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
				{titleText}
			</h1>
		</div>

		<div class="divider opacity-30 w-full md:w-5/6 lg:w-4/6 divider-neutral mt-8 mx-auto"></div>
		<p class="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 text-secondary">
			Account Manager, Avian WE - Bangalore
		</p>

		<div class="flex flex-col lg:flex-row items-center mt-10 justify-center w-full md:w-5/6 lg:w-4/5 xl:w-3/6 gap-8 px-4">
			<img 
				src={ansh1} 
				alt="Ansh" 
				class="mask mask-squircle w-3/5 sm:w-2/5 md:w-1/3 lg:w-1/4 max-w-[250px] mx-auto"
			/>
			<p class="text-center lg:text-left text-base sm:text-lg md:text-xl lg:text-base xl:text-lg mt-4 lg:mt-0 text-secondary leading-relaxed lg:max-w-[70%]">
				Blending corporate PR with creative content, I craft emotionally intelligent stories that resonate. From crisis management at Microsoft to imaginative consumer campaigns for ITC, I drive impactful narratives. Whether launching brands like L&T Semiconductors Niqo Robotics or sustaining momentum for Intel and Aerospike, I tailor strategies for success. With deep industry understanding and result-driven execution, I elevate brands through PR, content, and strategic communications. 
				Alongside my full-time roles, I also pursue a thriving freelance career, helping brands in these sectors craft compelling stories and strategic campaigns.
			</p>
		</div>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 px-4 md:px-6 lg:px-8 py-12">
		{#each achievements as achievement}
			<div class="card bg-neutral shadow-xl border border-primary/20">
				<div class="card-body p-6 md:p-6 lg:p-8 text-accent">
					<h2 class="card-title text-lg sm:text-xl md:text-2xl">{achievement.title}</h2>
					<p class="text-sm sm:text-base md:text-lg">{achievement.description}</p>
					<div class="card-actions justify-end">
						<a 
							href="/{achievement.slug}" 
							class="btn btn-primary btn-sm sm:btn-md md:btn-lg"
						>
							Learn More
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</main>

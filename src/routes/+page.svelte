<script>
	import { onMount } from 'svelte';
	import ansh1 from '$lib/assets/ansh1.jpeg';
	import { inView } from '$lib/actions/inView';
	let titleText = "Welcome to Akanksha Sharma's Nomination Entry for the PR Moment 30 Under 30 Awards";
	let displayText = "";
	
	onMount(() => {
		const typeText = async () => {
			await new Promise(resolve => {
				setTimeout(() => {
					let index = 0;
					const interval = setInterval(() => {
						if (index < titleText.length) {
							displayText += titleText[index];
							index++;
						} else {
							clearInterval(interval);
							resolve();
						}
					}, 40);
				}, 1000);
			});
		};

		typeText();
	});

	const achievements = [
		{ title: 'Why Should I Win', description: 'A strategist, storyteller, and media expert driving impactful narratives that shape industries.', slug: 'entries/why-should-i-win' },
		{ title: 'Case Studies of my work', description: 'Proven success in executing high-impact PR campaigns that deliver measurable business results.', slug: 'entries/case-studies' },
		{ title: 'Video Campaign: PR 2.0 – The Power You Don\'t See', description: 'Showcasing the unseen impact of PR in shaping perceptions and driving influence.', slug: 'entries/video-campaign' },
		{ title: 'Campaign 2: AI x PR: Smarter Strategies, Bigger Impact', description: 'Leveraging AI to revolutionize PR with data-driven, efficient, and high-impact strategies.', slug: 'entries/ai-pr-campaign' }
	];
</script>

<main class="w-full min-h-screen">
	<div class="flex flex-col min-h-dvh items-center justify-center">
		<div class="items-start justify-center w-4/6">
			<h1 class="text-6xl font-bold text-center relative">
				<span class="invisible">
					{titleText}
				</span>
				<span class="absolute inset-0">
					{displayText}
				</span>
			</h1>
		</div>

		<div class="divider divider-neutral transition-opacity duration-1000" 
			style="opacity: {displayText.length === titleText.length ? 1 : 0}">
		</div>
		
		<p class="text-center text-3xl mt-4 opacity-0 transition-opacity duration-1000" 
			style="opacity: {displayText.length === titleText.length ? 1 : 0}">
			Account Manager, Avian WE - Bangalore
		</p>

		<div class="flex flex-row items-center justify-center w-3/6 gap-8 px-8">
			<img 
				src={ansh1} 
				alt="Ansh" 
				class="items-center mask mask-squircle justify-center w-1/4  h-full mx-auto opacity-0 transition-opacity duration-1000" 
				style="opacity: {displayText.length === titleText.length ? 1 : 0}"
			/>
			<div class="divider divider-horizontal divider-neutral" style="opacity: {displayText.length === titleText.length ? 1 : 0}"></div>
			<p class="text-center text-xl mt-4 opacity-0 transition-opacity duration-1000" 
				style="opacity: {displayText.length === titleText.length ? 1 : 0}">
				Blending corporate PR with creative content, I craft emotionally intelligent stories that resonate. From crisis management at Microsoft to imaginative consumer campaigns for ITC, I drive impactful narratives. Whether launching brands like L&T Semiconductors Niqo Robotics or sustaining momentum for Intel and Aerospike, I tailor strategies for success. With deep industry understanding and result-driven execution, I elevate brands through PR, content, and strategic communications. 
				Alongside my full-time roles, I also pursue a thriving freelance career, helping brands in these sectors craft compelling stories and strategic campaigns.
			</p>
		</div>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 px-8 py-120">
		{#each achievements as achievement, i}
			<div 
				use:inView={{ threshold: 0.2 }}
				class="card bg-base-100 shadow-xl scroll-fade hover:scale-105 transition-transform border border-primary/20 hover:shadow-2xl hover:shadow-primary/20"
				style="transition-delay: {i * 150}ms"
			>
				<div class="card-body p-8">
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

<style>

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>


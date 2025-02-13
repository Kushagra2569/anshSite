<script>
	// Allow customization for background, shadow, extra sizing classes and clickable behavior.
	export let bgColor = "bg-neutral";
	export let shadow = "shadow-xl";
	export let sizeClass = ""; // Any extra sizing-related classes you'd like to pass.
	export let clickable = false; // Set to true when clicking/hover functionality is desired.
	export let onClick = () => {};
	export let hidden = false;
	export let role = "button";
	export let textColor = "text-accent";

	// Build the class string. When clickable is true, add a transition and hover effect.
	let classes = `card ${bgColor} ${shadow} ${sizeClass} ${textColor} ${
		clickable ? "cursor-pointer transition-all duration-300 border border-primary/20 hover:shadow-2xl hover:shadow-accent/20 hover:scale-105" : "transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/20"
	} ${hidden ? "hidden" : ""}`;
</script>

<div class={classes} on:click={onClick} {role}>
	<slot />
</div> 
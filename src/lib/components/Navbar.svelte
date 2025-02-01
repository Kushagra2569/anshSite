<script>
    export let title = "Akanksha Sharma"; // Default title, can be overridden
</script>

<div class="navbar bg-base-100">
    <div class="flex-1">
        <a href="/" class="btn btn-ghost text-xl">{title}</a>
    </div>
    <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
            <li><a href="/">Home</a></li>
            <li>
                <details>
                    <summary>Entries</summary>
                    <ul class="bg-base-100 rounded-t-none p-2">
                        <li><a href="/entries/why-should-i-win">Why Should I Win</a></li>
                        <li><a href="/entries/case-studies">Case Studies</a></li>
                        <li><a href="/entries/video-campaign">Video Campaign</a></li>
                        <li><a href="/entries/ai-pr-campaign">AI x PR Campaign</a></li>
                    </ul>
                </details>
            </li>
        </ul>
    </div>
</div> 
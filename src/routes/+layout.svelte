
<script lang="ts">
	import '../app.css'
	import { goto, invalidate } from '$app/navigation'
	import { onMount } from 'svelte'

	export let data
  let signout = async () => {
    console.log("loggingout");
const { error } = await supabase.auth.signOut()
    goto('/')
  }
	let { supabase, session } = data
	$: ({ supabase, session } = data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})
</script>

<header><h1><a href="/">Min test app</a></h1></header>
<button on:click="{signout}">Logg av</button>
<slot />

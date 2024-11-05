<script>
	import GdprBanner from '@beyonk/gdpr-cookie-consent-banner'

	function initAnalytics() {
		// do something with segment.io or google analytics etc
	}
</script>

<GdprBanner
	cookieName="Cookie Consent"
	description="We don't use many cookies, but we do use analytics."
	on:analytics={initAnalytics}
/>

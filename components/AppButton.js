export default {
    template: `
    <button class="disabled: cursor-not-allowed" :disabled="processing" >Hi there 
        <slot/>
        </button>
    `,

    data(){
        return {
            processing: true
        }
    }
}
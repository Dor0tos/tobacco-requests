export default function () {
    this.request_url = import.meta.env.VITE_REST_URL
    this.anon_key = import.meta.env.VITE_REST_KEY

    this.getTypeByID = async (type_id) => {
        try {
            const response = await fetch(
                `${this.request_url}/request-types?apikey=${this.anon_key}&id=eq.${type_id || 0}`
            )

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`)
            }

            const data = await response.json()
            return data
        } catch (error) {
            console.error('Ошибка при получении данных:', error)
            return null
        }
    }
}

// composables/useCheckboxStore.ts
export const useCheckboxStore = () => {
    // Nuxtのグローバルstate（同じキーなら全コンポーネントで共有される）
    const state = useState<Record<string, boolean>>('checkbox-store', () => ({}))

    const STORAGE_KEY = 'checkbox-store'

    // localStorage から初期読み込み（クライアントのみ）
    if (import.meta.client) {
         // すでに state に何も入っていないときだけ localStorage から復元
        if (Object.keys(state.value).length === 0) {
            const raw = localStorage.getItem(STORAGE_KEY)
            if (raw) {
                try {
                    state.value = JSON.parse(raw)
                } catch (e) {
                    console.error('Failed to parse checkbox-store from localStorage', e)
                }
            }
        }

        // state が変わるたびに localStorage に保存
        watch(
            state,
            (val) => {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
            },
            { deep: true }
        )
    }

    // 個々のチェックボックス用の getter/setter
    const useCheckbox = (id: string) =>
        computed<boolean>({
            get() {
                return state.value[id] ?? false
            },
            set(val: boolean) {
                state.value[id] = val
            },
        })

    return {
        state,
        useCheckbox,
    }
 }

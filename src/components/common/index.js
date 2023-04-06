import MyBtn from '@/components/common/MyBtn.vue'
import MyInput from '@/components/common/MyInput.vue'

export default [MyBtn, MyInput]

/*
код ниже был сгенерирован копилотом
я его не проверял на работоспособность
позже разобраться в этом коде
пока просто тупо закомментирую его
*/

/*
const requireComponent = require.context( // находим все файлы в данной директории
    // The relative path of the components folder
    './',
    // Whether or not to look in subfolders
    false,
    // The regular expression used to match base component filenames
    /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
    // Get component config
    const componentConfig = requireComponent(fileName)

    // Get PascalCase name of component
    const componentName = upperFirst(
        camelCase(
            // Gets the file name regardless of folder depth
            fileName
                .split('/')
                .pop()
                .replace(/\.\w+$/, '')
        )
    )

    // Register component globally
    Vue.component(
        componentName,
        // Look for the component options on `.default`, which will
        // exist if the component was exported with `export default`,
        // otherwise fall back to module's root.
        componentConfig.default || componentConfig
    )
}
*/

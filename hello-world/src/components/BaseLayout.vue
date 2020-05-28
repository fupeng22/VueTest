<template>
 <!--
    <div>
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
    -->

<div>
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <!--绑定在 <slot> 元素上的特性被称为插槽 prop-->
            <slot :user="userData">
                {{userData.lastName}}
            </slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>

</template>

<script>
    /*
    export default {
        name: "BaseLayout"
    }
    */

export default {
        name: "BaseLayout",
        data: () => ({
            userData: {
                firstName: 'AAA',
                lastName: 'Miss'
            }
        })
    }
</script>
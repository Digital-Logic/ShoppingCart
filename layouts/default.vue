<template>
    <Layout theme="dark">
        <Sidebar
            collapsible
            :trigger="null"
            v-model="collapsed">
            <div class="ant-layout-header menu-header">
                <Icon
                    class="menu-icon"
                    :type="collapsed ? 'right' : 'left'"
                    v-on:click="toggleCollapsed"
                />
            </div>

            <Menu
                :defaultSelectedKeys="['1']"/>
        </Sidebar>

        <Layout>
            <Header class="header title-bar-header">
                <Logo class="logo"/>
            </Header>
            <Content>
                <nuxt />
            </Content>
        </Layout>
    </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Layout, Icon } from "ant-design-vue";
import Menu from "../components/Menu.vue";
import Logo from "../components/Logo.vue";

export default Vue.extend({
    components: {
        Layout,
        Sidebar: Layout.Sider,
        Header: Layout.Header,
        Content: Layout.Content,
        Menu,
        Icon,
        Logo
    },
    data: () => ({
        collapsed: false
    }),
    methods: {
        toggleCollapsed() {
            this.collapsed = !this.collapsed;
        }
    }
});
</script>

<style lang="scss" scoped>
    .menu-header {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0;
    }
    .menu-icon {
        color: white;
        padding: 1.5em;
    }
    .title-bar-header {
        display: flex;
        align-items: center;
    }
    .logo {
        color: white
    }
</style>

<style lang="scss">
    .header {
        color: white;
    }
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
h1,h2,h3,h4,h5,p,span {
    color: inherit;
}
</style>

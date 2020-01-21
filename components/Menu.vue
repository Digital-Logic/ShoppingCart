<template>

    <Menu
      :defaultSelectedKeys="defaultSelectedKeys"
      theme="dark"
      mode="inline"
      class="menu"
    >
      <MenuItem key="1">
        <Icon type="pie-chart" />
        <span>Option 1</span>
      </MenuItem>
      <MenuItem key="2">
        <Icon type="desktop" />
        <span>Option 2</span>
      </MenuItem>
      <MenuItem key="3">
        <Icon type="inbox" />
        <span>Option 3</span>
      </MenuItem>
      <SubMenu key="sub1">
        <span slot="title"><Icon type="mail" /><span>Navigation One</span></span>
        <MenuItem key="5">Option 5</MenuItem>
        <MenuItem key="6">Option 6</MenuItem>
        <MenuItem key="7">Option 7</MenuItem>
        <MenuItem key="8">Option 8</MenuItem>
      </SubMenu>
      <SubMenu key="sub2">
        <span slot="title"><Icon type="appstore" /><span>Navigation Two</span></span>
        <MenuItem key="9">Option 9</MenuItem>
        <MenuItem key="10">Option 10</MenuItem>
        <SubMenu key="sub3" title="Submenu">
          <MenuItem key="11">Option 11</MenuItem>
          <MenuItem key="12">Option 12</MenuItem>
        </SubMenu>
      </SubMenu>
    </Menu>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Button, Menu, Icon } from "ant-design-vue";

export default Vue.extend({
    props: {
        defaultSelectedKeys: <PropOptions<Array<string>>> {
            type: Array,
            default: () => (['1'])
        }
    },
    data:() => ({
        collapsed: false
    }),
    components: {
        Button,
        Menu,
        MenuItem: Menu.Item,
        SubMenu: Menu.SubMenu,
        Icon
    },
    methods: {
        toggleCollapsed() {
            this.collapsed = !this.collapsed;
        }
    }
});

</script>

<style lang="scss" scoped>
    .menu {
        & > li:first-child {
            margin-top: 0;
        }
    }

</style>
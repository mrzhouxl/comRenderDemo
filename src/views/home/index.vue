<template>
  <div style="height: 100%; display: flex">
    <div class="left">
      <div class="box">
        <el-button type="pramary" @click="addText">自定义文本</el-button>
        <el-button type="pramary" @click="addImage">添加图片</el-button>
      </div>
    </div>
    <div class="content">
      <div class="phone">
        <draggable class="syllable_ul" element="ul" :list="coms" :options="{ group: 'title', animation: 150 }"
          :no-transition-on-drag="true" @change="change">
          <transition-group tag="div">
            <template v-for="(com, i) in coms" :index="i">
              <component class="com" @mousedown.native="current = i" :class="{ active: current === i }"
                :is="com && com.is" :key="com._id" v-bind="com.props"></component>
            </template>
          </transition-group>
        </draggable>
      </div>
    </div>
    <div class="right">
      <component :is="coms && coms[current].is + 'Edit'" :model="coms[current].props" @input="setStting"></component>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  data() {
    return {
      current: 0,
      drag: false,
      coms: [
        {
          _id: "C" + new Date().valueOf(),
          is: "myInput",
          unique: true,
          props: {
            title: "搜索栏",
            value: "hello",
          },
        },
      ],
    };
  },
  components: {
    draggable,
  },
  methods: {
    addImage() {
      this.coms.push({
        _id: "C" + new Date().valueOf(),
        is: "imageCom",
        url: 'https://nft.degallery.cn/oss-fs/9/2022/7/8/o_1g7etirv11irlu331p6e1hgr15e9a.png',
        unique: true,
        props: {
          url: 'https://nft.degallery.cn/oss-fs/9/2022/7/8/o_1g7etirv11irlu331p6e1hgr15e9a.png',
        },
      });
      console.log(this.coms)
    },
    //evt里面有两个值，一个evt.added 和evt.removed  可以分别知道移动元素的ID和删除元素的ID
    change(evt) {
      console.log(evt, '3')
      const { newIndex, oldIndex } = evt.moved;
      if (newIndex === 0 || oldIndex === 0) {
        return false;
      }
      console.log(newIndex, oldIndex)
      this.current = newIndex;
    },
    setProps(e) {
      console.log(e, "phoneEmit");
    },
    setStting(e) {
      console.log(e, "editEmit");
      this.coms[this.current].props = e;
    },
    addText() {
      this.coms.push({
        _id: "C" + new Date().valueOf(),
        name: "input",
        title: "搜索栏",
        is: "myInput",
        unique: true,
        props: {
          title: "搜索栏",
        },
      });
    },
    //start ,end ,add,update, sort, remove 得到的都差不多
    // start(evt) {
    //   this.drag = true;
    //   console.log(evt, "start...");
    // },
    // end(evt) {
    //   console.log(evt, "end....");
    //   this.drag = true;
    //   evt.item; //可以知道拖动的本身
    //   evt.to; // 可以知道拖动的目标列表
    //   evt.from; // 可以知道之前的列表
    //   evt.oldIndex; // 可以知道拖动前的位置
    //   evt.newIndex; // 可以知道拖动后的位置
    // },
    // move(evt, originalEvent) {
    //   console.log(evt, "move");
    //   console.log(originalEvent); //鼠标位置
    // },
  },
};
</script>

<style>
.left {
  height: 100%;
  width: 200px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
}

.box {
  height: 35px;
  width: 100px;
  display: flex;
  justify-content: center;
  padding: 10px;
}

.content {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}

.content .phone {
  height: 675px;
  width: 375px;
  padding: 0 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
}

.right {
  height: 100%;
  width: 400px;
  box-shadow: -1px 0px 3px rgba(0, 0, 0, 0.2);
}

.active {
  z-index: 9;
  outline: 2px solid #2ec79c !important;
}

.com {}

.com:hover {
  cursor: move;
  z-index: 1;
  outline: 1px dashed #2ec79c !important;
}

.com:hover .active {
  z-index: 9;
  outline: 2px solid #2ec79c !important;
}
</style>
<template>
  <div>
    <div class="layout-breadcrumb">
      <Breadcrumb>
        <Breadcrumb-item href="#/">首页</Breadcrumb-item>
        <Breadcrumb-item>分类模块</Breadcrumb-item>
      </Breadcrumb>
    </div>

    <Button-group>
      <Button @click="changeType(1)" :class="{ active: formValidate.type === 1 }">日志分类</Button>
      <Button @click="changeType(2)" :class="{ active: formValidate.type === 2 }">相册分类</Button>

      <Button @click="changeType(3)" :class="{ active: formValidate.type === 3 }">评论分类</Button>
      <Button @click="changeType(4)" :class="{ active: formValidate.type === 4 }">音乐分类</Button>
      <Button @click="changeType(5)" :class="{ active: formValidate.type === 5 }">电影分类</Button>

      <!-- <Button @click="changeType(3)" :class="{ active: formValidate.type === 3 }">相册分类</Button> -->

    </Button-group>
    <!--
    1.changeType它主要需要做哪些事？
      1) getData
      2) :class，动态的设置样式，如何动态的设置样式呢？通过type的值去判断
    -->

    <Tree :data="baseData" @on-select-change="selectChange"></Tree>
    <!--
      1.selectChange树形菜单的点击操作
        1）需要获取到它的_id，如果说是新增，_id === parentId
        2) 如果说是修改，_id === _id
        3）节点的名称也可以进行获取
    -->
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <!-- 只处理了添加的信息提示，自行处理修改等提示信息 -->
      <span v-if="currentNodeTitle==null">
        你将添加根节点
        </span>
      <span v-else>
        你将添加 {{currentNodeTitle}} 的子节点
       </span>


      <Form-item label="分类名称" prop="title">
        <Input v-model="formValidate.title" placeholder="请输入分类名称"></Input>
      </Form-item>
  
      <Button type="primary" @click="addRootNode">添加根节点</Button>
      <!-- <Button type="primary" @click="addChildNode">添加子节点</Button> -->
      <Button type="primary" @click="editNode()">修改</Button>
      <Button type="primary" @click="remove()">删除</Button>
  
      <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
      <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
    </Form>
  
  </div>
</template>

<script>
  import VueBase64FileUpload from 'vue-base64-file-upload';
  export default {
    data() {
      return {
        _id: null,
        formValidate: {
          _id: null,
          type: 1,
          title: '',
          parentId: null,
          currentParentId: null
        },
        ruleValidate: {
          title: [{
            required: true,
            message: '分类名称不能为空',
            trigger: 'blur'
          }]
        },
        baseData: [],
        currentNodeTitle: null
      };
    },
    methods: {
      changeType(type) {
        this.getTreeData(type);
        this.formValidate.type = type;
      },
      getTreeData(type) {
        var _this = this;
        _this.$http.get(`http://localhost:3000/cate/${type}`).then(res => {
          _this.baseData = res.data;
        })
      },
      selectChange(node) {
        this._id = node[0]._id; // _id就等于获取到的节点的_id
        this.formValidate.parentId = node[0]._id; // 表单提交里的parentId等于节点_id
        this.formValidate.currentParentId = node[0].parentId; // 当前的parentId就是它的节点的父ID
        this.currentNodeTitle = node[0].title; // 获取标题
      },
      editNode() {
        this.formValidate._id = this._id; // 当前的_id就是_id
        this.formValidate.parentId = this.formValidate.currentParentId; 
      },
      addRootNode() {
        this.formValidate._id = null; // _id是为null
        this.formValidate.parentId = null; // 父id，parentId是为null
      },
      addChildNode(node) {
        if (this.formValidate.parentId === null) {
          alert('no')
        } else {
          alert(this.formValidate.parentId)
        }
      },
      handleSubmit(name) {
        var _this = this;
        var submitUrl, submitMethods;
  
        if (_this.formValidate._id != null) {
          submitUrl = `http://localhost:3000/cate/data/` + _this.formValidate._id;
          submitMethods = 'PUT';
        } else {
          submitUrl = `http://localhost:3000/cate/data`;
          submitMethods = 'POST'
        }
        _this.$refs[name].validate((valid) => {
          if (valid) {
            _this.$http({
                url: submitUrl,
                method: submitMethods,
                data: _this.formValidate
              })
              .then(function(response) {
                _this.$Message.success('提交成功!');
                _this.getTreeData(_this.formValidate.type);
                var type = _this.formValidate.type;  // 首先先获取type的值
                Object.assign(_this.$data.formValidate, _this.$options.data().formValidate); // 让我们的数据恢复到初始化状态
                _this.formValidate.type = type; // 将 formValidate.type进行重新赋值
              })
          } else {
            this.$Message.error('表单验证失败!');
          }
        })
  
      },
      handleReset(name) {
        this.$refs[name].resetFields();
      },
      remove() {
        var _this = this
        _this.$http.delete(`http://localhost:3000/cate/${_this._id}`).then(res => {
          _this.getTreeData(_this.formValidate.type);
          var type = _this.formValidate.type;
          Object.assign(_this.$data, _this.$options.data());
          _this.formValidate.type = type;
        })
      }
    },
    created() {
      this.getTreeData(1);
    }
  }
</script>
<template>
<div>
    <div class="layout-breadcrumb">
        <Breadcrumb>
            <Breadcrumb-item href="#/">首页</Breadcrumb-item>
            <Breadcrumb-item>评论模块</Breadcrumb-item>
        </Breadcrumb>
    </div>
  <div class="btns">
      <Button type="info" @click="modal1 = true">添加数据</Button>
      <Button type="error" @click="removes">删除数据</Button>
      <Input icon="search" v-model="filter.name" placeholder="请输入..." style="width: 200px"></Input>
      <Button type="ghost" @click="search">搜索数据</Button>
  </div>

  <Modal
        v-model="modal1"
        title="评论"
  >
        <div slot="footer">
            修改评论模块
        </div>
         
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <Form-item label="姓名" prop="name">
              <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
          </Form-item>
          <Form-item label="评论" prop="desc">
              <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
          </Form-item>
          <Form-item label="标题" prop="commenttype">
              <Input v-model="formValidate.commenttype" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
          </Form-item>
          <Form-item>
              <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
              <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
          </Form-item>
      </Form>

    </Modal>


  <Table border :columns="columns" :data="list" @on-selection-change="handlerSelectionChange"></Table>


  <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
          <Page :total="filter.total" :current="filter.page" :page-size="5" @on-change="changePage"></Page>
      </div>
  </div>

</div>

</template>

<script>
    import Base from '../../common/Base.js'

    export default {
        mixins:[Base],
        data () {
            return {
                module:'comment',
                formValidate: {
                    _id: null,
                    name: '',
                    desc: '',
                    commenttype: '',
                    commenttitle: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
                    ],
                    desc: [
                        { required: true, message: '请输入评论', trigger: 'blur' },
                        { type: 'string', min: 10, message: '评论不能少于10字', trigger: 'blur' }
                    ],
                    commenttype: [
                        { required: true, message: '请输入所属类别', trigger: 'blur' },
                    ],
                    commenttitle: [
                        { required: true, message: '请输入标题', trigger: 'blur' },
                    ]
                },
                columns:[
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        key: 'name',
                        width: 100,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '评论',
                        key: 'comment',
                        render: (h, params) => {
                            return h('div',params.row.desc);
                        }
                    },
                    {
                        title: '文章标题',
                        key: 'commenttype',
                        render: (h, params) => {
                            return h('div',params.row.commenttype);
                        }
                    },
                    //  {
                    //     title: '标题',
                    //     key: 'commenttitle',
                    //     render: (h, params) => {
                    //         return h('div',params.row.commenttitle);
                    //     }
                    // },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                       render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.edit(params.index)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ])
                         }
                    }
                ]
            }
        },
         methods: {
            selectChange(node) {
                this.formValidate.cateId = node[0]._id;
                this.formValidate.cate = {
                    _id : node[0]._id,
                    title : node[0].title
                }
                this.filter.cateId = node[0]._id;
                this.getData()
            },
        }
    }
</script>

<style lang="scss">
  .btns {
    padding:10px;
  }
</style>
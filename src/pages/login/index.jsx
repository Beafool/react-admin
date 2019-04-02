/*
    登录路由组件

*/
import React, {Component} from 'react';
import {
  Form, Icon, Input, Button,Checkbox,
} from 'antd';
import './index.less';
import logo from './logo.png';


const Item = Form.Item;

@Form.create()
 class Login extends Component {
  login = (e)=>{
    //禁止默认行为
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
          if (!err) {
              console.log('Received values of form: ', values);
          }
      });
  }


  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo"/>
          <h1>后台管理系统</h1>
        </header>
        <section className="login-content">
          <h3>用户登录</h3>
          <Form onSubmit={this.login} className="login-form">
            <Item>
                {
                    //getFieldDecorator(‘标识名称)(组件)
                    getFieldDecorator('username', {
                        //表单检验的规则
                        rules: [
                            { required:true,whiteSpace:true,message:'必须输入用户名' },
                            {min:4,message:'用户名必须大于4位'},
                            {max:12,message:'用户名必须小于12位'},
                            {pattern: /^[a-zA-Z0-9_]+$/,message:'用户名必须英文、数字、或下划线组成'}
                        ]
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                    )
                }


            </Item>
            <Item>
                {
                    getFieldDecorator('password',{
                        rules: [
                            { }
                        ]
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />

                    )
                }

            </Item>
            <Item>

              <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>

            </Item>
          </Form>


        </section>
      </div>
    )
  }
}
//Form.create({ name: 'normal_login' })  返回值是一个高阶函数
//Form.create({ name: 'normal_login' })(Login); 返回值是一个新的组件
// export default Form.create()(Login);

export default Login;
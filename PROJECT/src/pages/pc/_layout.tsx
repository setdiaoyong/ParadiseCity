// import Link from 'umi/link';
import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Button, BackTop } from 'antd';
import { connect } from 'dva';
import Link from 'umi/link';
import Crumb from './crumb';
const styles = require('./index.css');
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

// PC entry
class PCLayout extends React.Component<
  {
    loading: any;
    history: any;
    dispatch: any;
    userInfo: any;
  },
  {
    crumb: any;
  }
  > {
  constructor(props: any) {
    super(props);
    this.state = {
      crumb: <Breadcrumb.Item>IO Board</Breadcrumb.Item>,
    };
    this.props.dispatch({
      type: 'global/getUserInfo',
    });
  }

  render() {
    return (
      <>
        <Content style={{ padding: '0 50px' }}>
          {/* <div
            style={{
              border: '1px solid #e8e8e8',
              borderTop: '0',
              padding: '20px',
            }}
          >
            <Crumb />
          </div> */}
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{
              background: '#fff',
              overflow: 'none',
              width: '200px'
            }}>
              <Link to="/pc">
                <img
                  src={this.props.userInfo.avatar_url}
                  alt=""
                  style={{
                    border: '2px solid gray',
                    width: '200px',
                    borderRadius: '5px',
                    minHeight: '200px',
                  }}
                />
              </Link>
              <div
                style={{
                  border: '1px solid gray',
                  width: '200px',
                  borderRadius: '5px',
                  height: '75px',
                  textAlign: 'center',
                }}
              >
                <h3 style={{ marginTop: '10px' }}>
                  <a href="https://github.com/xiaozhaoqi" target="_blank">github.com/xiaozhaoqi</a>
                </h3>
                <h3 style={{ fontFamily: 'KaiTi' }}>{'>>> 仅用于学习 <<<'}</h3>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  flexWrap: 'wrap',
                  overflow: 'none',
                  width: '200px'
                }}
              >
                <Link to="/pc">
                  <Button className={`${styles.siderBtn} ${document.location.hash === '#/pc' ? styles.siderBtnActive : null}`}>浏览新闻</Button>
                </Link>
                <Link to="/pc/about">
                  <Button className={`${styles.siderBtn} ${document.location.hash === '#/pc/about' ? styles.siderBtnActive : null}`}>站点介绍</Button>
                </Link>
                <Link to="/pc/cardList">
                  <Button className={`${styles.siderBtn} ${document.location.hash === '#/pc/cardList' ? styles.siderBtnActive : null}`}>文章卡片</Button>
                </Link>
                <Link to="/pc/write">
                  <Button className={`${styles.siderBtn} ${document.location.hash === '#/pc/write' ? styles.siderBtnActive : null}`}>编写文章</Button>
                </Link>
                <a href="https://info.flagcounter.com/m1nf">
                  <img
                    src="https://s11.flagcounter.com/count/m1nf/bg_FFFFFF/txt_000000/border_FFFFFF/columns_2/maxflags_64/viewers_3/labels_1/pageviews_1/flags_0/percent_0/"
                    alt="Flag Counter"
                    style={{ marginTop: '10px' }}
                  />
                </a>
              </div>
            </Sider>
            <Content style={{ padding: '0 32px', minHeight: 280 }}>{this.props.children}</Content>
            <BackTop />
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center', background: '#fff' }}>
          IO Board ©2018-2019 Created by zhaoqi.xiao
        </Footer>
      </>
    );
  }
}

export default connect(state => ({
  loading: state.loading.global,
  userInfo: state.global.userInfo,
}))(PCLayout);

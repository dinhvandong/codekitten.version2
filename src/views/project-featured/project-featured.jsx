import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    Link,
} from "react-router-dom";
import ProjectBest from '../../components/project-featured/project-best.jsx';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
class ProjectFeatured extends React.Component {

    constructor(props)
    {
        super(props);
        this.state={
            projects:[]
        }
        this.gotoStartProject = this.gotoStartProject.bind(this);
    }
    gotoStartProject()
    {
        console.log("gotoStartProject");
        var linkToClick = document.getElementById('start-project');
        //const link_download =  ConfigServer.host + "/code_kittens_api/projects/" + '20713546-76d2-40cf-af54-c4630a3d0fbb';        
        
        linkToClick.click();

    }

    
  
    componentDidMount(){
        axios({
            method:'GET',
            url:'https://dev.teky.asia/v1/code_kittens_api/projects?page=1&per_page=5',
            data:null
        }).then(res=>{
            
            console.log(res);
           
            this.setState({
                projects:res.data.data.projects,
            })
            console.log('data:',this.state.projects);
        }).catch(err=>{
            console.log(err);
        });
    }
    render() {
        return (
            <>
                {/*Header part*/}
                {/*l-nav*/}
                <div className="l-nav">
                    <div className="c-header">
                        <div className="container">
                            <div className="c-header-inner">
                                <div className="c-logo"><a href="index.html"><img src="static/images/logo.png" alt="logo" /></a></div>
                                <button className="c-menu-expand js-menu-expand" type="button"><span /></button>
                                <div className="c-header-right">
                                    <div className="c-header-admin">
                                        <div className="c-admin-nologin">
                                            <ul >

                                            <Link onClick={this.gotoStartProject} id ="start-project" to={"/project/getStarted"}>

                                            <a  className="li-button"   href="#">Bắt đầu ngay</a>

                                            </Link>


                                            </ul>
                                        </div>
                                    </div>
                                    <div className="c-menu">
                                        <ul>
                                            <li><a href="index.html">Trang chủ</a></li>
                                            <li><a href="#">Thử thách</a></li>
                                            <li className="active"><a href="project-featured.html">Dự án</a></li>
                                            <li><a href="#">Kiến thức</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end container*/}
                    </div>
                    {/*end c-header*/}
                </div>
                {/*end l-nav*/}
                {/*Content page part*/}
                <div className="c-pano">
                    <div className="c-pano__caption">
                        <div className="container">
                            <h1 className="c-pano__title">Dự án</h1>
                        </div>
                        {/*end container*/}
                    </div>
                    {/*end c-pano__caption*/}
                </div>
                {/*end c-pano*/}
                <div className="l-content">
                    <div className="container">
                        <div className="c-box is-margin-medium">
                            {/* <div className="c-box__title">
                                <h2 className="c-box__title__name"><span className="is-small">TOP</span><br /><b>Dự án hay</b></h2>
                            </div> */}
                            {/* box dự án hay  */}
                          {
                        this.state.projects.length>0?<ProjectBest projects={this.state.projects}/>:<Skeleton></Skeleton>
                          }
                            
                        </div>
                        <div className="c-box is-margin-medium">
                            <div className="c-box__title is-button">
                                <h2 className="c-box__title__name"><span className="is-small">Dự án</span><br /><b>Nhiều người chơi</b></h2>
                                <div className="c-box__title__btn"><a className="btn btn-primary is-circle" href="project-all.html"><b>Xem toàn bộ</b></a></div>
                            </div>
                            <div className="c-box__content">
                                <div className="c-project-grid">
                                    <ul>
                                        <li>
                                            <div className="c-project-item">
                                                <div className="c-project-item__thumb"><a href="project-detail.html"><img src="static/upload/project_5.jpg" alt="project" /></a></div>
                                                <div className="c-project-item__content">
                                                    <div className="c-project-item__avatar"><img src="static/upload/avatar_5.png" alt="avatar" /></div>
                                                    <div className="c-project-item__row">
                                                        <h3 className="c-project-item__title"><a href="project-detail.html">Mèo đuổi chuột xám</a></h3><span className="c-project-item__author">
                                                            Bởi:
                                                            <b>Nguyễn Phi Trường</b></span>
                                                    </div>
                                                    <div className="c-project-item__row"><a className="c-project-item__link" href="project-detail.html">Xem hướng dẫn</a><a className="c-project-item__link" href="#">Chơi ngay</a></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="c-project-item">
                                                <div className="c-project-item__thumb"><a href="project-detail.html"><img src="static/upload/project_6.jpg" alt="project" /></a></div>
                                                <div className="c-project-item__content">
                                                    <div className="c-project-item__avatar"><img src="static/upload/avatar_6.png" alt="avatar" /></div>
                                                    <div className="c-project-item__row">
                                                        <h3 className="c-project-item__title"><a href="project-detail.html">Mèo đuổi chuột xám</a></h3><span className="c-project-item__author">
                                                            Bởi:
                                                            <b>Nguyễn Phi Trường</b></span>
                                                    </div>
                                                    <div className="c-project-item__row"><a className="c-project-item__link" href="project-detail.html">Xem hướng dẫn</a><a className="c-project-item__link" href="#">Chơi ngay</a></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="c-project-item">
                                                <div className="c-project-item__thumb"><a href="project-detail.html"><img src="static/upload/project_7.jpg" alt="project" /></a></div>
                                                <div className="c-project-item__content">
                                                    <div className="c-project-item__avatar"><img src="static/upload/avatar_7.png" alt="avatar" /></div>
                                                    <div className="c-project-item__row">
                                                        <h3 className="c-project-item__title"><a href="project-detail.html">Mèo đuổi chuột xám</a></h3><span className="c-project-item__author">
                                                            Bởi:
                                                            <b>Nguyễn Phi Trường</b></span>
                                                    </div>
                                                    <div className="c-project-item__row"><a className="c-project-item__link" href="project-detail.html">Xem hướng dẫn</a><a className="c-project-item__link" href="#">Chơi ngay</a></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="c-project-item">
                                                <div className="c-project-item__thumb"><a href="project-detail.html"><img src="static/upload/project_8.jpg" alt="project" /></a></div>
                                                <div className="c-project-item__content">
                                                    <div className="c-project-item__avatar"><img src="static/upload/avatar_8.png" alt="avatar" /></div>
                                                    <div className="c-project-item__row">
                                                        <h3 className="c-project-item__title"><a href="project-detail.html">Mèo đuổi chuột xám</a></h3><span className="c-project-item__author">
                                                            Bởi:
                                                            <b>Nguyễn Phi Trường</b></span>
                                                    </div>
                                                    <div className="c-project-item__row"><a className="c-project-item__link" href="project-detail.html">Xem hướng dẫn</a><a className="c-project-item__link" href="#">Chơi ngay</a></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="c-box is-margin-medium">
                            <div className="c-box__title is-button">
                                <h2 className="c-box__title__name"><span className="is-small">Dự án</span><br /><b>Nhiều người xem</b></h2>
                                <div className="c-box__title__btn"><a className="btn btn-primary is-circle" href="project-all.html"><b>Xem toàn bộ</b></a></div>
                            </div>
                            <div className="c-box__content">
                                <div className="c-project-grid">
                                    <ul>
                                        <li>
                                            <div className="c-project-item">
                                                <div className="c-project-item__thumb"><a href="project-detail.html"><img src="static/upload/project_1.jpg" alt="project" /></a></div>
                                                <div className="c-project-item__content">
                                                    <div className="c-project-item__avatar"><img src="static/upload/avatar_1.png" alt="avatar" /></div>
                                                    <div className="c-project-item__row">
                                                        <h3 className="c-project-item__title"><a href="project-detail.html">Mèo đuổi chuột xám</a></h3><span className="c-project-item__author">
                                                            Bởi:
                                                            <b>Nguyễn Phi Trường</b></span>
                                                    </div>
                                                    <div className="c-project-item__row"><a className="c-project-item__link" href="project-detail.html">Xem hướng dẫn</a><a className="c-project-item__link" href="#">Chơi ngay</a></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="c-project-item">
                                                <div className="c-project-item__thumb"><a href="project-detail.html"><img src="static/upload/project_2.jpg" alt="project" /></a></div>
                                                <div className="c-project-item__content">
                                                    <div className="c-project-item__avatar"><img src="static/upload/avatar_2.png" alt="avatar" /></div>
                                                    <div className="c-project-item__row">
                                                        <h3 className="c-project-item__title"><a href="project-detail.html">Mèo đuổi chuột xám</a></h3><span className="c-project-item__author">
                                                            Bởi:
                                                            <b>Nguyễn Phi Trường</b></span>
                                                    </div>
                                                    <div className="c-project-item__row"><a className="c-project-item__link" href="project-detail.html">Xem hướng dẫn</a><a className="c-project-item__link" href="#">Chơi ngay</a></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="c-project-item">
                                                <div className="c-project-item__thumb"><a href="project-detail.html"><img src="static/upload/project_3.jpg" alt="project" /></a></div>
                                                <div className="c-project-item__content">
                                                    <div className="c-project-item__avatar"><img src="static/upload/avatar_3.png" alt="avatar" /></div>
                                                    <div className="c-project-item__row">
                                                        <h3 className="c-project-item__title"><a href="project-detail.html">Mèo đuổi chuột xám</a></h3><span className="c-project-item__author">
                                                            Bởi:
                                                            <b>Nguyễn Phi Trường</b></span>
                                                    </div>
                                                    <div className="c-project-item__row"><a className="c-project-item__link" href="project-detail.html">Xem hướng dẫn</a><a className="c-project-item__link" href="#">Chơi ngay</a></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="c-project-item">
                                                <div className="c-project-item__thumb"><a href="project-detail.html"><img src="static/upload/project_4.jpg" alt="project" /></a></div>
                                                <div className="c-project-item__content">
                                                    <div className="c-project-item__avatar"><img src="static/upload/avatar_4.png" alt="avatar" /></div>
                                                    <div className="c-project-item__row">
                                                        <h3 className="c-project-item__title"><a href="project-detail.html">Mèo đuổi chuột xám</a></h3><span className="c-project-item__author">
                                                            Bởi:
                                                            <b>Nguyễn Phi Trường</b></span>
                                                    </div>
                                                    <div className="c-project-item__row"><a className="c-project-item__link" href="project-detail.html">Xem hướng dẫn</a><a className="c-project-item__link" href="#">Chơi ngay</a></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="c-box is-margin-medium">
                            <div className="c-box__title is-button">
                                <h2 className="c-box__title__name"><span className="is-small">Cuộc thi</span><br /><b>Em yêu khoa học</b></h2>
                                <div className="c-box__title__btn"><a className="btn btn-primary is-circle" href="project-all.html"><b>Xem toàn bộ</b></a></div>
                            </div>
                            <div className="c-box__content">
                                <div className="c-project-grid">
                                    <ul>
                                        <li>
                                            <div className="c-project-item">
                                                <div className="c-project-item__thumb"><a href="project-detail.html"><img src="static/upload/project_1.jpg" alt="project" /></a></div>
                                                <div className="c-project-item__content">
                                                    <div className="c-project-item__avatar"><img src="static/upload/avatar_1.png" alt="avatar" /></div>
                                                    <div className="c-project-item__row">
                                                        <h3 className="c-project-item__title"><a href="project-detail.html">Mèo đuổi chuột xám</a></h3><span className="c-project-item__author">
                                                            Bởi:
                                                            <b>Nguyễn Phi Trường</b></span>
                                                    </div>
                                                    <div className="c-project-item__row"><a className="c-project-item__link" href="project-detail.html">Xem hướng dẫn</a><a className="c-project-item__link" href="#">Chơi ngay</a></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="c-project-item">
                                                <div className="c-project-item__thumb"><a href="project-detail.html"><img src="static/upload/project_2.jpg" alt="project" /></a></div>
                                                <div className="c-project-item__content">
                                                    <div className="c-project-item__avatar"><img src="static/upload/avatar_2.png" alt="avatar" /></div>
                                                    <div className="c-project-item__row">
                                                        <h3 className="c-project-item__title"><a href="project-detail.html">Mèo đuổi chuột xám</a></h3><span className="c-project-item__author">
                                                            Bởi:
                                                            <b>Nguyễn Phi Trường</b></span>
                                                    </div>
                                                    <div className="c-project-item__row"><a className="c-project-item__link" href="project-detail.html">Xem hướng dẫn</a><a className="c-project-item__link" href="#">Chơi ngay</a></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="c-project-item">
                                                <div className="c-project-item__thumb"><a href="project-detail.html"><img src="static/upload/project_3.jpg" alt="project" /></a></div>
                                                <div className="c-project-item__content">
                                                    <div className="c-project-item__avatar"><img src="static/upload/avatar_3.png" alt="avatar" /></div>
                                                    <div className="c-project-item__row">
                                                        <h3 className="c-project-item__title"><a href="project-detail.html">Mèo đuổi chuột xám</a></h3><span className="c-project-item__author">
                                                            Bởi:
                                                            <b>Nguyễn Phi Trường</b></span>
                                                    </div>
                                                    <div className="c-project-item__row"><a className="c-project-item__link" href="project-detail.html">Xem hướng dẫn</a><a className="c-project-item__link" href="#">Chơi ngay</a></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="c-project-item">
                                                <div className="c-project-item__thumb"><a href="project-detail.html"><img src="static/upload/project_4.jpg" alt="project" /></a></div>
                                                <div className="c-project-item__content">
                                                    <div className="c-project-item__avatar"><img src="static/upload/avatar_4.png" alt="avatar" /></div>
                                                    <div className="c-project-item__row">
                                                        <h3 className="c-project-item__title"><a href="project-detail.html">Mèo đuổi chuột xám</a></h3><span className="c-project-item__author">
                                                            Bởi:
                                                            <b>Nguyễn Phi Trường</b></span>
                                                    </div>
                                                    <div className="c-project-item__row"><a className="c-project-item__link" href="project-detail.html">Xem hướng dẫn</a><a className="c-project-item__link" href="#">Chơi ngay</a></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="c-box is-margin-medium">
                            <div className="c-box__title is-button">
                                <h2 className="c-box__title__name"><span className="is-small">Chủ đề</span><br /><b>Ngày tết thiếu nhi</b></h2>
                                <div className="c-box__title__btn"><a className="btn btn-primary is-circle" href="project-all.html"><b>Xem toàn bộ</b></a></div>
                            </div>
                            <div className="c-box__content">
                                <div className="c-project-grid">
                                    <ul>
                                        <li>
                                            <div className="c-project-item">
                                                <div className="c-project-item__thumb"><a href="project-detail.html"><img src="static/upload/project_1.jpg" alt="project" /></a></div>
                                                <div className="c-project-item__content">
                                                    <div className="c-project-item__avatar"><img src="static/upload/avatar_1.png" alt="avatar" /></div>
                                                    <div className="c-project-item__row">
                                                        <h3 className="c-project-item__title"><a href="project-detail.html">Mèo đuổi chuột xám</a></h3><span className="c-project-item__author">
                                                            Bởi:
                                                            <b>Nguyễn Phi Trường</b></span>
                                                    </div>
                                                    <div className="c-project-item__row"><a className="c-project-item__link" href="project-detail.html">Xem hướng dẫn</a><a className="c-project-item__link" href="#">Chơi ngay</a></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="c-project-item">
                                                <div className="c-project-item__thumb"><a href="project-detail.html"><img src="static/upload/project_2.jpg" alt="project" /></a></div>
                                                <div className="c-project-item__content">
                                                    <div className="c-project-item__avatar"><img src="static/upload/avatar_2.png" alt="avatar" /></div>
                                                    <div className="c-project-item__row">
                                                        <h3 className="c-project-item__title"><a href="project-detail.html">Mèo đuổi chuột xám</a></h3><span className="c-project-item__author">
                                                            Bởi:
                                                            <b>Nguyễn Phi Trường</b></span>
                                                    </div>
                                                    <div className="c-project-item__row"><a className="c-project-item__link" href="project-detail.html">Xem hướng dẫn</a><a className="c-project-item__link" href="#">Chơi ngay</a></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="c-project-item">
                                                <div className="c-project-item__thumb"><a href="project-detail.html"><img src="static/upload/project_3.jpg" alt="project" /></a></div>
                                                <div className="c-project-item__content">
                                                    <div className="c-project-item__avatar"><img src="static/upload/avatar_3.png" alt="avatar" /></div>
                                                    <div className="c-project-item__row">
                                                        <h3 className="c-project-item__title"><a href="project-detail.html">Mèo đuổi chuột xám</a></h3><span className="c-project-item__author">
                                                            Bởi:
                                                            <b>Nguyễn Phi Trường</b></span>
                                                    </div>
                                                    <div className="c-project-item__row"><a className="c-project-item__link" href="project-detail.html">Xem hướng dẫn</a><a className="c-project-item__link" href="#">Chơi ngay</a></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="c-project-item">
                                                <div className="c-project-item__thumb"><a href="project-detail.html"><img src="static/upload/project_4.jpg" alt="project" /></a></div>
                                                <div className="c-project-item__content">
                                                    <div className="c-project-item__avatar"><img src="static/upload/avatar_4.png" alt="avatar" /></div>
                                                    <div className="c-project-item__row">
                                                        <h3 className="c-project-item__title"><a href="project-detail.html">Mèo đuổi chuột xám</a></h3><span className="c-project-item__author">
                                                            Bởi:
                                                            <b>Nguyễn Phi Trường</b></span>
                                                    </div>
                                                    <div className="c-project-item__row"><a className="c-project-item__link" href="project-detail.html">Xem hướng dẫn</a><a className="c-project-item__link" href="#">Chơi ngay</a></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*end container*/}
                </div>
                {/*end l-content*/}
                {/*Footer part*/}
                {/*l-footer*/}
                <div className="l-footer">
                    <div className="container">
                        <div className="c-footer-main">
                            <div className="row">
                                <div className="col-lg-5 mb-3 mb-lg-0">
                                    <div className="c-footer-logo"><a href="#"><img src="static/images/logo.png" alt="logo" /></a></div>
                                    <div className="c-footer-desc">
                                        <p>The best medicines &amp; biggest brands within 30 minutes at your home. Experience the power of MedCartel today.</p>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="c-footer-label">Company</div>
                                            <div className="c-footer-content">
                                                <div className="c-footer-list">
                                                    <ul>
                                                        <li><a href="#">About us</a></li>
                                                        <li><a href="#">Privacy Policy</a></li>
                                                        <li><a href="#">Terms &amp; Conditions</a></li>
                                                        <li><a href="#">Rider</a></li>
                                                        <li><a href="#">Contact</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="c-footer-label">More Links</div>
                                            <div className="c-footer-content">
                                                <div className="c-footer-list">
                                                    <ul>
                                                        <li><a href="#">About us</a></li>
                                                        <li><a href="#">Privacy Policy</a></li>
                                                        <li><a href="#">Terms &amp; Conditions</a></li>
                                                        <li><a href="#">Rider</a></li>
                                                        <li><a href="#">Contact</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="c-footer-label">Contact Details</div>
                                            <div className="c-footer-content">
                                                <p className="p-icon"><i className="icon20-phone-white" />+31 62 19 22 705<br />7 Days - 8am - 10pm</p>
                                                <p className="p-icon"><i className="icon20-email-white" />info@medcartel.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="c-footer-bottom">
                            <div className="c-copyright">© 2021 Codekitten, All Rights Reserved</div>
                            <div className="c-footer-social"><a href="#"><i className="icon16-facebook-white" /></a></div>
                        </div>
                    </div>
                    {/*end container*/}
                </div>
            </>
        );
    }
    

}


export default ProjectFeatured;
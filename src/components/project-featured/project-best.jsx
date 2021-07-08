import React, { Component } from 'react';
import ItemProjectBestComponent from './item-project-best.jsx';

class ProjectBest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: this.props.projects,
            indexActive:0
        }
    }
    render() {
        return (
            <>
                <div className="c-box__title">
                    <h2 className="c-box__title__name"><span className="is-small">TOP</span><br /><b>Dự án hay</b></h2>
                </div>
                <div className="c-box__content">
                    <div className="c-project-top">
                        <div className="c-project-tabs">
                            <div className="c-project-tabs__title">
                                <ul>
                                    {this.state.projects.map((value, index) => (
                                        <ItemProjectBestComponent
                                            href={`#tab${index + 1}`}
                                            srcImg={value.thumbnail}
                                            isActive={index === this.state.indexActive ? true : false}
                                            onClick={() => {
                                                    this.setState({
                                                        indexActive:index  
                                                    })
                                            }}
                                        />
                                    ))}
                                </ul>
                            </div>
                            <div className="c-project-tabs__container">

                                {this.state.projects.map((value, index) => (
                                    <div className={this.state.indexActive===index?"c-project-tabs__pane is-current active":"c-project-tabs__pane"} id={`#tab${index + 1}`}>
                                        <div className="c-project-intro">
                                            <div className="c-project-intro__left">
                                                <div className="c-project-intro__thumb"><a href="project-detail.html"><img src={value.thumbnail} alt="project" /></a>
                                                    <div className="c-project-intro__btn"><a href="project-detail.html">Xem code</a><a href="#">Chơi ngay</a></div>
                                                </div>
                                            </div>
                                            <div className="c-project-intro__right">
                                                <div className="c-project-intro__row">
                                                    <div className="c-project-intro__avatar"><img src="static/upload/avatar_1.png" alt="avatar" /></div>
                                                </div>
                                                <div className="c-project-intro__row">
                                                    <h2 className="c-project-intro__title">{value.name}</h2><span className="c-project-intro__author">
                                                        Bởi:
                                                        <b>{value.created_by}</b></span>
                                                </div>
                                                <div className="c-project-intro__row">
                                                    <div className="b-maincontent">
                                                        {value.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ProjectBest;

{/* 
                                <div className="c-project-tabs__pane is-current active" id="tab1">
                                    <div className="c-project-intro">
                                        <div className="c-project-intro__left">
                                            <div className="c-project-intro__thumb"><a href="project-detail.html"><img src="static/upload/project-top_1.png" alt="project" /></a>
                                                <div className="c-project-intro__btn"><a href="project-detail.html">Xem code</a><a href="#">Chơi ngay</a></div>
                                            </div>
                                        </div>
                                        <div className="c-project-intro__right">
                                            <div className="c-project-intro__row">
                                                <div className="c-project-intro__avatar"><img src="static/upload/avatar_1.png" alt="avatar" /></div>
                                            </div>
                                            <div className="c-project-intro__row">
                                                <h2 className="c-project-intro__title">Mèo đuổi chuột xám</h2><span className="c-project-intro__author">
                                                    Bởi:
                                                    <b>Nguyễn Phi Trường</b></span>
                                            </div>
                                            <div className="c-project-intro__row">
                                                <div className="b-maincontent">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sollicitudin quisque sociis commodo lectus ac et et cursus. Purus amet maecenas aliquam turpis nunc, ornare accumsan.</p>
                                                    <p>Aliquam sit duis egestas malesuada feugiat diam interdum in. Maecenas vitae phasellus laoreet auctor tortor augue tellus non senectus.</p>
                                                    <p>Quam lectus nibh fermentum faucibus. Lorem turpis in euismod tincidunt faucibus. Aliquam lorem suspendisse massa eleifend est diam.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="c-project-tabs__pane" id="tab2">
                                    <div className="c-project-intro">
                                        <div className="c-project-intro__left">
                                            <div className="c-project-intro__thumb"><a href="project-detail.html"><img src="static/upload/project-top_2.png" alt="project" /></a>
                                                <div className="c-project-intro__btn"><a href="project-detail.html">Xem code</a><a href="#">Chơi ngay</a></div>
                                            </div>
                                        </div>
                                        <div className="c-project-intro__right">
                                            <div className="c-project-intro__row">
                                                <div className="c-project-intro__avatar"><img src="static/upload/avatar_1.png" alt="avatar" /></div>
                                            </div>
                                            <div className="c-project-intro__row">
                                                <h2 className="c-project-intro__title">Mèo đuổi chuột xám</h2><span className="c-project-intro__author">
                                                    Bởi:
                                                    <b>Nguyễn Phi Trường</b></span>
                                            </div>
                                            <div className="c-project-intro__row">
                                                <div className="b-maincontent">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sollicitudin quisque sociis commodo lectus ac et et cursus. Purus amet maecenas aliquam turpis nunc, ornare accumsan.</p>
                                                    <p>Aliquam sit duis egestas malesuada feugiat diam interdum in. Maecenas vitae phasellus laoreet auctor tortor augue tellus non senectus.</p>
                                                    <p>Quam lectus nibh fermentum faucibus. Lorem turpis in euismod tincidunt faucibus. Aliquam lorem suspendisse massa eleifend est diam.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="c-project-tabs__pane" id="tab3">
                                    <div className="c-project-intro">
                                        <div className="c-project-intro__left">
                                            <div className="c-project-intro__thumb"><a href="project-detail.html"><img src="static/upload/project-top_3.png" alt="project" /></a>
                                                <div className="c-project-intro__btn"><a href="project-detail.html">Xem code</a><a href="#">Chơi ngay</a></div>
                                            </div>
                                        </div>
                                        <div className="c-project-intro__right">
                                            <div className="c-project-intro__row">
                                                <div className="c-project-intro__avatar"><img src="static/upload/avatar_1.png" alt="avatar" /></div>
                                            </div>
                                            <div className="c-project-intro__row">
                                                <h2 className="c-project-intro__title">Mèo đuổi chuột xám</h2><span className="c-project-intro__author">
                                                    Bởi:
                                                    <b>Nguyễn Phi Trường</b></span>
                                            </div>
                                            <div className="c-project-intro__row">
                                                <div className="b-maincontent">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sollicitudin quisque sociis commodo lectus ac et et cursus. Purus amet maecenas aliquam turpis nunc, ornare accumsan.</p>
                                                    <p>Aliquam sit duis egestas malesuada feugiat diam interdum in. Maecenas vitae phasellus laoreet auctor tortor augue tellus non senectus.</p>
                                                    <p>Quam lectus nibh fermentum faucibus. Lorem turpis in euismod tincidunt faucibus. Aliquam lorem suspendisse massa eleifend est diam.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="c-project-tabs__pane" id="tab4">
                                    <div className="c-project-intro">
                                        <div className="c-project-intro__left">
                                            <div className="c-project-intro__thumb"><a href="project-detail.html"><img src="static/upload/project-top_4.png" alt="project" /></a>
                                                <div className="c-project-intro__btn"><a href="project-detail.html">Xem code</a><a href="#">Chơi ngay</a></div>
                                            </div>
                                        </div>
                                        <div className="c-project-intro__right">
                                            <div className="c-project-intro__row">
                                                <div className="c-project-intro__avatar"><img src="static/upload/avatar_1.png" alt="avatar" /></div>
                                            </div>
                                            <div className="c-project-intro__row">
                                                <h2 className="c-project-intro__title">Mèo đuổi chuột xám</h2><span className="c-project-intro__author">
                                                    Bởi:
                                                    <b>Nguyễn Phi Trường</b></span>
                                            </div>
                                            <div className="c-project-intro__row">
                                                <div className="b-maincontent">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sollicitudin quisque sociis commodo lectus ac et et cursus. Purus amet maecenas aliquam turpis nunc, ornare accumsan.</p>
                                                    <p>Aliquam sit duis egestas malesuada feugiat diam interdum in. Maecenas vitae phasellus laoreet auctor tortor augue tellus non senectus.</p>
                                                    <p>Quam lectus nibh fermentum faucibus. Lorem turpis in euismod tincidunt faucibus. Aliquam lorem suspendisse massa eleifend est diam.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="c-project-tabs__pane" id="tab5">
                                    <div className="c-project-intro">
                                        <div className="c-project-intro__left">
                                            <div className="c-project-intro__thumb"><a href="project-detail.html"><img src="static/upload/project-top_5.png" alt="project" /></a>
                                                <div className="c-project-intro__btn"><a href="project-detail.html">Xem code</a><a href="#">Chơi ngay</a></div>
                                            </div>
                                        </div>
                                        <div className="c-project-intro__right">
                                            <div className="c-project-intro__row">
                                                <div className="c-project-intro__avatar"><img src="static/upload/avatar_1.png" alt="avatar" /></div>
                                            </div>
                                            <div className="c-project-intro__row">
                                                <h2 className="c-project-intro__title">Mèo đuổi chuột xám</h2><span className="c-project-intro__author">
                                                    Bởi:
                                                    <b>Nguyễn Phi Trường</b></span>
                                            </div>
                                            <div className="c-project-intro__row">
                                                <div className="b-maincontent">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sollicitudin quisque sociis commodo lectus ac et et cursus. Purus amet maecenas aliquam turpis nunc, ornare accumsan.</p>
                                                    <p>Aliquam sit duis egestas malesuada feugiat diam interdum in. Maecenas vitae phasellus laoreet auctor tortor augue tellus non senectus.</p>
                                                    <p>Quam lectus nibh fermentum faucibus. Lorem turpis in euismod tincidunt faucibus. Aliquam lorem suspendisse massa eleifend est diam.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             */}
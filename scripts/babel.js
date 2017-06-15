/**
 * Created by Patrik on 2017-05-29.
 */

function diff(ary) {
    var newA = [];
    for (var i = 1; i < ary.length; i++)  newA.push(A[i] - ary[i - 1])
    return newA;
}

var Application = React.createClass({
    getInitialState: function () {
        return {
            page: 0,
        };
    },
    setPage: function (i) {
      this.setState({page: i}, null);
    },
   render: function () {
       return (
         <div>
             <Header setPage={this.setPage} page={this.state.page}/>
             <List page={this.state.page} project={this.state.project}/>
             {/*   <Project/>
             <Experience/>
             <Contact/>*/}
             <Footer/>
         </div>
       );
   }
});

var Header = React.createClass({
    responsiveHeader: function () {
        if(window.matchMedia("(max-width:1139px)")) {
            var div = document.getElementById('mobile_menu');
            div.style.display = div.style.display === "inline-block" ? "none" : "inline-block";
            console.log("responsiveHeader");
        }
    },
    onChangePage: function (e) {
        e.preventDefault();
        var value = e.target.value;
        this.props.setPage(value);
        var mq = window.matchMedia("(max-width:1139px)");
        if(mq.matches) {
            var div = document.getElementById('mobile_menu');
            div.style.display = "none";
            console.log("onChangePage");
        }

    /*    console.log(value);*/
    },
    render: function () {
        var path = "assets/img/laptop3.jpeg";
        var style = {backgroundImage: "url("+path+")"};
        var title = "";
        var info = "";


        switch (this.props.page) {
            case 0:
                title = "Patrik Olofsson";
                info = "Webb, android & java utveckling";
                break;
            case 1:
                title = "Om";
                info = "Utbildning & Arbetslivserfarenhet";

                break;
            case 2:
                title = "Projekt";
                info = "Stora som små";
                break;
            case 3:
                title = "Kontakta mig";
                info = "Kontakta mig!";
                break;
        }

        var home = "Hem";
        var about = "Om";
        var project = "Projekt";
        var contact = "Kontakta mig";
        var name = "Patrik Olofsson";
        return (
         <div className="header" style={style}>
             <div className="topBar">
                 <div className="title">{name}</div>
                 <div className="respmenu" id="respmenu">
                     <div className="hamburger" id="hamburger" onClick={this.responsiveHeader}> <img id="icon_menu" src="assets/img/1496606738_menu-alt.svg"/></div>
                 </div>
                 <div className="mobile_menu" id="mobile_menu">
                     <li value="0" onClick={this.onChangePage}>{home}</li>
                     <li value="1" onClick={this.onChangePage}>{about}</li>
                     <li value="2" onClick={this.onChangePage}>{project}</li>
                     <li value="3" onClick={this.onChangePage}>{contact}</li>
                 </div>
                 <div className="menu" id="menu">
                     <li value="0" onClick={this.onChangePage}>{home}</li>
                     <li value="1" onClick={this.onChangePage}>{about}</li>
                     <li value="2" onClick={this.onChangePage}>{project}</li>
                     <li value="3" onClick={this.onChangePage}>{contact}</li>
                 </div>
             </div>
             <div className="name">{title}</div>
             <div className="info">{info}</div>
         </div>
     )  ;
    }
});

var List = React.createClass({
   render: function () {
       var list = "";
       var class_ = "list";
        if(this.props.page === 0) {
           list =  <Main/>;
        }
        else if(this.props.page === 1) {
            list = <Experiences/>;
            class_ = "experience_list";
        }
        else if(this.props.page === 2) {
            list = <Projects project={this.props.project}/>;
            class_ = "project_List";
        }
        else if(this.props.page === 3) {
            list = <Contact/>;
        }

       return (
           <div className={class_}>
               {list}
           </div>
       )
   }
});

var Main = React.createClass({
   render: function () {
       var path = "assets/img/cvbild.jpg";
       var style = {backgroundImage: "url("+path+")"};
       return (
           <div className="main">
                  <div className="block">
                    <div className="inner">
                        <div className="one">
                            <div className="text">
                                <p>Patrik Olofsson <br/>
                                    Nyutexaminerad <a href="http://nackademin.se/utbildningar/programutvecklare-java/">Programutvecklare Java</a> 2017 Q2 Yrkeshögskola Nackademin.<br/>
                                    På webbplatsen finner du information om Patriks tidigare erfarenheter och projekt.
                                </p>
                            </div>
                        </div>
                        <div className="two">
                            <div className="img" style={style}>

                            </div>
                {/*            <img src={path}/>*/}
                        </div>
                    </div>
               </div>
           </div>
       )
   }
});

var Experiences = React.createClass({
    getInitialState: function () {
        return {
            educations: {
                education: [
                    {
                        id: 1,
                        title: "Teknikprogrammet(TE), Information- och Medieteknik",
                        school: "Thorildsplans gymnasium",
                        date: "Aug 2011 - Jun 2014",
                        description: [
                            {
                                id: 1,
                                text: "Data & IT. Kurser såsom programmering, webutveckling, nätverksteknik. Gymnasiearbete där jag gjorde ett dator-spel i XNA C#.",
                                edId: 1
                            }
                        ]
                    }
                ]
            },
            workExperiences: {
                workExperience: [
                    {
                        id: 1,
                        title: " Stockholm",
                        date: "2015",
                        description: [
                            {
                                id: 1,
                                text: "Vikarierade vid behov soiskor med nedsatt syn",
                                workExpId: 1
                            },
                            {
                                id: 2,
                                text: "Lärde ut funktioner och användbara program på datorn",
                                workExpId: 1
                            },
                            {
                                id: 3,
                                text: "Svarade på frågor eleverna hade om sina uppgiter",
                                workExpId: 1
                            }
                        ]
                    }
                ]
            }
        }
    },
    downloadEducation: function () {
        var url = "assets/json/education.json";

        $.ajax({
            url: url,
            dataType: "json",
            contentType: "utf-8",
            success: function (data) {
               /* console.log("Data: ", data);*/
                this.setState({educations: data}, function () {
                   /* console.log("Projects: ",this.state.educations);*/
                });

            }.bind(this),
            error: function (xhr, status, err) {
            /*    console.error("Error downloading education ", this.props.url, status, err.toString());*/
            }.bind(this)
        });
    },
    downloadWorkExperience: function () {
        var url = "assets/json/work_experience.json";

        $.ajax({
            url: url,
            dataType: "json",
            contentType: "utf-8",
            success: function (data) {
                console.log("Data: ", data);
                this.setState({workExperiences: data}, function () {
                    console.log("workExperiences: ",this.state.workExperiences);
                });
            }.bind(this),
            error: function (xhr, status, err) {
            /*    console.error("Error downloading education ", this.props.url, status, err.toString());*/
            }.bind(this)
        });
    },
    componentDidMount: function () {
        this.downloadEducation();
        this.downloadWorkExperience();
    },
    render: function () {



        var education = this.state.educations.education;
        var education_nodes = [];
        var education_text = [];

        for(var a = 0; a < education.length; a++) {

            for(var b = 0; b < education[a].description.length; b++) {
                if(education[a].id === education[a].description[b].edId) {
                    education_text[education_text.length] = <li key={"Text" + b + "Desc" + education[a].id} className="text">{education[a].description[b].text}</li>;

                }
            }

            education_nodes[education_nodes.length] = <div className="education" key={"workExp_row" + a}>
                <div id="title">{education[a].title}</div>
                <div id="school">{education[a].school}</div>
                <div className="date">{education[a].date}</div>
                <ul className="description">{education_text}</ul>
                <hr></hr>
            </div>;
            education_text = [];
        }

        var workExperience = this.state.workExperiences.workExperience;

        var workExperience_nodes = [];
        var text = [];
        for(var i = 0; i < workExperience.length; i++) {

            for(var j = 0; j < workExperience[i].description.length; j++) {
                if(workExperience[i].id === workExperience[i].description[j].workExpId) {
                    text[text.length] = <li key={"Text" + j + "Desc" + workExperience[i].id} className="text">{workExperience[i].description[j].text}</li>;

                }
            }

            workExperience_nodes[workExperience_nodes.length] = <div className="workExperience" key={"workExp_row" + i}>
                <div id="title">{workExperience[i].title}</div>
                <div className="date">{workExperience[i].date}</div>
                <ul className="description">{text}</ul>
                <hr></hr>
            </div>;
            text = [];
        }

        var educationTitle = "Utbildning";
        var workExperienceTitle = "Arbetslivserfarenhet";
        return (
            <div className="experiences">
                <div className="block">
                    <div className="inner">
                        <div className="one">
                            <div className="title">{educationTitle}</div>
                            {education_nodes}
                        </div>
                        <div className="two">
                            <div className="title">{workExperienceTitle}</div>
                            {workExperience_nodes}
                    </div>
                    </div>
                </div>
            </div>
        )
    }
});

var Projects = React.createClass({
    getInitialState: function () {
        return {
       projects: {
            project : [
                {
                    id: 0,
                    title: "title",
                    description: "description",
                    url: "some",
                },
            ]
        }
        }
    },
    downloadProjects: function () {
        var url = "assets/json/projects.json";

        $.ajax({
            url: url,
            dataType: "json",
            contentType: "utf-8",
            success: function (data) {
                /*console.log("Data: ", data);*/
                this.setState({projects: data}, function () {
                  /*  console.log("Projects: ",this.state.projects);*/
                });

            }.bind(this),
            error: function (xhr, status, err) {
             /*   console.error("Error downloading projects ", this.props.url, status, err.toString());*/
            }.bind(this)
        });
    },
    componentDidMount: function () {
        this.downloadProjects();
    },
    render: function () {
        var array = [];

        for(var i = 0; i < this.state.projects.project.length; i++) {
            this.state.projects.project.sort(function (a,b) {
                return a.id - b.id;
            });
            array[array.length] = <div key={"row" + i} className="project">
                <div id="title">{this.state.projects.project[i].title}</div>
                <div id="description">{this.state.projects.project[i].description}</div>
                <div id="links"></div>
                <img src={this.state.projects.project[i].url} id="img"/>
                <hr></hr>
                </div>;

        }

        return (
            <div className="projects">
                <div className="block">
                    <div className="inner">
                        {array}
                    </div>
                </div>
            </div>
        )
    }
});

var Contact = React.createClass({
    onMailSubmit: function (e) {
        e.preventDefault();

        $.ajax({
           type: "POST",
            url: "scripts/PHPMailer_5.2.4/mail.php",
            cache: false,
            data: {name: $("#input_name").val(), email: $("#input_email").val(), message: $("#input_message").val()},
            success: function () {
                document.getElementById('failure').style.display = "none";
                document.getElementById('success').style.display = "inline-block";
            }.bind(this),
            error: function () {
                document.getElementById('success').style.display = "none";
                document.getElementById('failure').style.display = "inline-block";
            }.bind(this)
        });
    },
    render: function () {
        var path = "assets/img/contact.jpg";
        var style = {backgroundImage: "url("+path+")"};
        return (
            <div className="contact">
                <form className="mailTo_form" onSubmit={this.onMailSubmit}>
                    <div id="name">
                        <input type="text" placeholder="Namn" id="input_name" required/>
                    </div>
                    <div id="email">
                        <input type="email" placeholder="E-mail" id="input_email" required/>
                    </div>
                    <div id="message">
                        <input type="text" placeholder="Meddelande" id="input_message" required />
                    </div>
                    <div id="button">
                        <input type="submit" value="Skicka"/>
                    </div>
                    <div className="response">
                        <div id="success">Ditt meddelande har skickats.</div>
                        <div id="failure">Det blev något fel. Ditt meddelande skickades ej.</div>
                    </div>
                </form>

            </div>
        )
    }
});

var Footer = React.createClass({
   render: function () {
       return (
           <div className="footer">

           </div>
       );
   }
});

ReactDOM.render(
    <Application/>,
    document.getElementById('application')
);
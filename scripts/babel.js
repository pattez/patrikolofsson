/**
 * Created by Patrik on 2017-05-29.
 */

function diff(ary) {
    var newA = [];
    for (var i = 1; i < ary.length; i++)  newA.push(A[i] - ary[i - 1])
    return newA;
}


var dev = false;



var Application = React.createClass({
    getInitialState: function () {
        return {
            page: 0,
            language: 0,
        };
    },
    setPage: function (i) {
      this.setState({page: i}, null);
    },
   setLanguage: function (i) {
       this.setState({language: i}, null);
   },
   render: function () {
       return (
         <div>
             <Header setPage={this.setPage} page={this.state.page} language={this.state.language} setLanguage={this.setLanguage}/>
             <List page={this.state.page} project={this.state.project} language={this.state.language} setLanguage={this.setLanguage}/>
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
    onChangeLanguage: function (e) {
        e.preventDefault();
        let i = this.props.language;
        i = i === 1 ? 0 : 1;
      //console.log(i);
      this.props.setLanguage(i);
        var mq = window.matchMedia("(max-width:1139px)");
        if(mq.matches) {
            var div = document.getElementById('mobile_menu');
            div.style.display = "none";
            console.log("onChangePage");
        }
    },
    render: function () {
       // console.log(this.props.language);
        var path = "assets/img/laptop3.jpeg";
        var style = {backgroundImage: "url("+path+")"};
        var title = "";
        var info = "";

        var type = "";
        if(dev) {
            type = " D E V ";
        }

        let home = "";
        let about = "";
        let project = "";
        let contact = "";
        let  name = "Patrik Olofsson";

        switch(this.props.language) {
            case 0:
                home = "Hem";
                about = "Om";
                project = "Projekt";
                contact = "Kontakta mig";
                switch (this.props.page) {
                    case 0:
                        title = "Patrik Olofsson" + type;
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
                break;
            case 1:
                home = "Home";
                about = "About";
                project = "Projects";
                contact = "Contact me";
                switch (this.props.page) {
                    case 0:
                        title = "Patrik Olofsson" + type;
                        info = "Webb, android & java development";
                        break;
                    case 1:
                        title = "About";
                        info = "Education & Experience";
                        break;
                    case 2:
                        title = "Projects";
                        info = "Big and small";
                        break;
                    case 3:
                        title = "Contact me";
                        info = "Contact me!";
                        break;
                }
                break;
        }


        let language = "EN";
        if(this.props.language === 1) {
            language = "SV";
        }
        return (
         <div className="header" style={style}>
             <div className="topBar" id="top_bar">
                 <div className="title">{name}</div>
                 <div className="respmenu" id="respmenu">
                     <div className="hamburger" id="hamburger" onClick={this.responsiveHeader}> <img id="icon_menu" src="assets/img/1496606738_menu-alt.svg"/></div>
                 </div>
                 <div className="mobile_menu" id="mobile_menu">
                     <li value="0" onClick={this.onChangePage}>{home}</li>
                     <li value="1" onClick={this.onChangePage}>{about}</li>
                     <li value="2" onClick={this.onChangePage}>{project}</li>
                     <li value="3" onClick={this.onChangePage}>{contact}</li>
                     <li value="4" onClick={this.onChangeLanguage}>{language}</li>
                 </div>
                 <div className="menu" id="menu">
                     <li value="0" onClick={this.onChangePage}>{home}</li>
                     <li value="1" onClick={this.onChangePage}>{about}</li>
                     <li value="2" onClick={this.onChangePage}>{project}</li>
                     <li value="3" onClick={this.onChangePage}>{contact}</li>
                     <li value="4" onClick={this.onChangeLanguage}>{language}</li>
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
           list =  <Main language={this.props.language}/>;
        }
        else if(this.props.page === 1) {
            list = <Experiences language={this.props.language}/>;
            class_ = "experience_list";
        }
        else if(this.props.page === 2) {
            list = <Projects project={this.props.project} language={this.props.language}/>;
            class_ = "project_List";
        }
        else if(this.props.page === 3) {
            list = <Contact language={this.props.language}/>;
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
       var path = "assets/img/cvbild_2017.jpg";
       var style = {backgroundImage: "url("+path+")"};

       let text = "";

       switch(this.props.language) {
           case 0:
               text =        <p>Patrik Olofsson <br/>
                   Nyutexaminerad <a href="http://nackademin.se/utbildningar/programutvecklare-java/">Programutvecklare Java</a> 2017 Q2 Yrkeshögskola Nackademin.<br/>
                   På webbplatsen finner du information om Patriks tidigare erfarenheter och projekt.
               </p>;
               break;
           case 1:
               text =         <p>Patrik Olofsson <br/>
                   Recent graduate <a href="http://nackademin.se/utbildningar/programutvecklare-java/">Java Developer</a> 2017 Q2 <a href="https://en.wikipedia.org/wiki/Swedish_Polytechnic">Yrkeshögskola</a> Nackademin.<br/>
                   On this website you'll find information about Patrik's earlier experiences and projects.
               </p>;
               break;
       }

       return (
           <div className="main">
                  <div className="block">
                    <div className="inner">
                        <div className="one">
                            <div className="text">
                                {text}
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
                        school: "Thorildsplans gymnasium",
                        date: "Aug 2011 - Jun 2014",
                        language: [
                            {
                                language_id: 0,
                                title: "Teknikprogrammet(TE), Information- och Medieteknik",
                                description: [
                                    {
                                        id: 1,
                                        text: "Data & IT. Kurser såsom programmering, webutveckling, nätverksteknik. Gymnasiearbete där jag gjorde ett dator-spel i XNA C#.",
                                        edId: 1
                                    }
                                ]
                            },
                        ]
                    }
                ]
            },
            workExperiences: {
                workExperience: [
                    {
                        id: 1,
                        date: "2015",
                        language: [
                            {
                                title: " Stockholm",
                                language_id: 0,
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
                            },
                        ],
                    }
                ]
            }
        }
    },
    downloadEducation: function () {
        var url = "assets/json/education.json";
        console.log("Downloading educations, Standby...");
        $.ajax({
            url: url,
            dataType: "json",
            contentType: "utf-8",
            success: function (data) {
               /* console.log("Data: ", data);*/
                this.setState({educations: data}, function () {
                   /* console.log("Projects: ",this.state.educations);*/
                    $(".education #title").css("color", "black");
                   // $(".education #title").css("cursor", "none");
                });

            }.bind(this),
            error: function (xhr, status, err) {
            /*    console.error("Error downloading education ", this.props.url, status, err.toString());*/
                console.log("Failed to download educations");
                $(".education #title").css("color", "red");
                $(".education #title").fadeTo("slow", 0).fadeTo("slow", 1.0);
                this.setState({educations: {education: [{id:0, title:"Could not download educations. Try again.", description:[{id:0, text:""}]}]}}, null);
            }.bind(this)
        });
    },
    downloadWorkExperience: function () {
        var url = "assets/json/work_experience.json";
        console.log("Downloading work experiences, Standby...");
        $.ajax({
            url: url,
            dataType: "json",
            contentType: "utf-8",
            success: function (data) {
                console.log("Data: ", data);
                this.setState({workExperiences: data}, function () {
                    $(".workExperience #title").css("color", "black");
                    $(".workExperience #title").css("cursor", "none");
                    console.log("workExperiences: ",this.state.workExperiences);
                });
            }.bind(this),
            error: function (xhr, status, err) {
            /*    console.error("Error downloading education ", this.props.url, status, err.toString());*/
                console.log("Failed to download work experiences");
               // console.log(xhr, status,err);
                $(".workExperience #title").css("color", "red");
                $(".workExperience #title").fadeTo("slow", 0).fadeTo("slow", 1.0);
                this.setState({workExperiences: {workExperience: [{id:0, title:"Could not download work experiences. Try again.",description:[{id:0, text:""}]}]}}, null);
            }.bind(this)
        });
    },
    componentDidMount: function () {
        this.downloadEducation();
        this.downloadWorkExperience();
    },
    refreshEducation: function(e) {
        e.preventDefault();
        if(this.state.educations.education[0].title === "Could not download educations. Try again.") {
            this.downloadEducation();
        }
    },
    refreshWorkExperience: function (e) {
        e.preventDefault();
        if(this.state.workExperiences.workExperience[0].title === "Could not download work experiences. Try again.") {
            this.downloadWorkExperience();
        }
    },
    render: function () {

        var education = this.state.educations.education;
        var education_nodes = [];
        var education_text = [];
        let ed_title = "";
        for(var a = 0; a < education.length; a++) {

/*            for(var b = 0; b < education[a].description.length; b++) {
                if(education[a].id === education[a].description[b].edId) {
                    education_text[education_text.length] = <li key={"Text" + b + "Desc" + education[a].id} className="text">{education[a].description[b].text}</li>;

                }
            }*/

            for(let j = 0; j < education[a].language.length; j++) {
                if(education[a].language[j].language_id === this.props.language) {
                    for(let x = 0; x < education[a].language[j].description.length; x++) {
                        if(education[a].id === education[a].language[j].description[x].edId) {
                            education_text[education_text.length] = <li key={"Text" + x + "Desc" + education[a].id} className="text">{education[a].language[j].description[x].text}</li>;
                            ed_title = education[a].language[j].title;
                        }
                    }
                }
            }

            education_nodes[education_nodes.length] = <div className="education" key={"workExp_row" + a}>
                <div id="title" onClick={this.refreshEducation}>{ed_title}</div>
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
        let title = "";
        for(var i = 0; i < workExperience.length; i++) {

            for(let j = 0;  j < workExperience[i].language.length; j++) {
                    if(workExperience[i].language[j].language_id === this.props.language) {
                        for(let x = 0; x < workExperience[i].language[j].description.length; x++) {
                            if(workExperience[i].id === workExperience[i].language[j].description[x].workExpId) {
                                text[text.length] = <li key={"Text" + x + "Desc" + workExperience[i].id} className="text">{workExperience[i].language[j].description[x].text}</li>;
                                title = workExperience[i].language[j].title;
                            }
                        }
                    }

            }

            workExperience_nodes[workExperience_nodes.length] = <div className="workExperience" key={"workExp_row" + i}>
                <div id="title" onClick={this.refreshWorkExperience}>{title}</div>
                <div className="date">{workExperience[i].date}</div>
                <ul className="description">{text}</ul>
                <hr></hr>
            </div>;
            text = [];
        }

/*        if(this.state.educations.education[0].title === "Could not download educations. Try again.") {
            $(".education #title").css("cursor", "pointer");
        }*/

/*        if(this.state.workExperiences.workExperience[0].title === "Could not download work experiences. Try again.") {
            $(".workExperience #title").css("cursor", "pointer");
        }*/

        let educationTitle = "";
        let workExperienceTitle = "";
        switch(this.props.language) {
            case 0:
                educationTitle = "Utbildning";
                workExperienceTitle = "Arbetslivserfarenhet";
                break;
            case 1:
                educationTitle = "Education";
                workExperienceTitle = "Experience";
                break;
        }
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
                    language: [
                        {
                            language_id: 0,
                            title: "Space shooter",
                            description: "På Thorildsplans gymnasium läste Patrik kurser såsom programmering. Därav utveckalde Patrik ett 2D-animerat spel som gymnasiearbete som skulle bidra till kunskaper inom programmering och planering."
                        },
                        {
                            language_id: 1,
                            title: "Space shooter",
                            description: "When Patrik attended highschool 'Thorildsplans gymnasium', he had classes such as programming. Hence Patrik developed a 2D-animated PC game as his final exam work, which would help him develop programming and planning skills."
                        }
                    ],
                    url: "/assets/img/Spaceshooter.png",
                    github_link: "https://github.com/pattez/Space-Shooter"
                },
            ]
        }
        }
    },
    downloadProjects: function () {
        var url = "assets/json/projects.json";
        console.log("Downloading projects, Standby...");
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
                console.log("Failed to download projects");
                $(".project #title").css("color", "red");
             this.setState({projects: {project: [{id:0, title:"Could not download projects. Try again.", url:"assets/img/refresh.png"}]}}, null);
            }.bind(this)
        });
    },
    componentDidMount: function () {
        this.downloadProjects();
    },
    refresh: function (e) {
        e.preventDefault();
      if(this.state.projects.project[0].title === "Could not download projects. Try again." || this.state.projects.project[0].url === "assets/img/refresh.png") {
          $(".project #title").fadeTo("slow", 0).fadeTo("slow", 1.0);
          this.downloadProjects();
      }
    },
    render: function () {
        let array = [];
        let title = "";
        let description = "";

        for(let i = 0; i < this.state.projects.project.length; i++) {
            this.state.projects.project.sort(function (a,b) {
                return a.id - b.id;
            });


            for(let x = 0; x < this.state.projects.project[i].language.length; x++) {
                if(this.state.projects.project[i].language[x].language_id === this.props.language) {
                    title = this.state.projects.project[i].language[x].title;
                    description = this.state.projects.project[i].language[x].description;
                }
            }


            array[array.length] = <div key={"row" + i} className="project">
                <div id="title">{title}</div>
                <div id="description">{description}</div>
                <img src={this.state.projects.project[i].url} id="img" onClick={this.refresh}/>
                <div id="links"><a href={this.state.projects.project[i].github_link}><img src="assets/img/GitHub-Mark-32px.png" id="githubimg"/></a></div>
                <hr></hr>
                </div>;

        }

        if(this.state.projects.project[0].title === "Could not download projects. Try again." || this.state.projects.project[0].url === "assets/img/refresh.png") {
            document.getElementById('img').style.cursor = "pointer";
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
        let name = "";
        let email = "Email";
        let message = "";
        let send = "";
        let success = "";
        let failure = "";

        switch(this.props.language) {
            case 0:
                name = "Namn";
                message = "Meddelande";
                send = "Skicka";
                success = "Ditt meddelande har skickats.";
                failure = "Det blev något fel. Ditt meddelande skickades ej.";
                break;
            case 1:
                name = "Name";
                message = "Message";
                send = "Send";
                success = "Your message has been successfully sent.";
                failure = "Error, something went wrong. Your message could not be sent.";
                break;
        }
        return (
            <div className="contact">
                <form className="mailTo_form" onSubmit={this.onMailSubmit}>
                    <div id="name">
                        <input type="text" placeholder={name} id="input_name" required/>
                    </div>
                    <div id="email">
                        <input type="email" placeholder={email} id="input_email" required/>
                    </div>
                    <div id="message">
                        <input type="text" placeholder={message} id="input_message" required />
                    </div>
                    <div id="button">
                        <input type="submit" value={send}/>
                    </div>
                    <div className="response">
                        <div id="success">{success}</div>
                        <div id="failure">{failure}</div>
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


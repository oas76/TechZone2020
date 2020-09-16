const xml_data = `<?xml version='1.0' encoding='utf-8'?> <?xml-stylesheet type="text/xsl" href="ACSPIXMT.xsl" ?>

<conference>
    <talk>
        <title>A new app-centric architecture for RoomOS</title>
        <level>General</level>
        <duration>20</duration>
        <track>A</track>
        <session>09:00-09:45</session>
        <description>Late last year, the GUI community organized an offsite workshop to discuss pain points and possible solutions for Phoenix, the GUI for all CE devices. Problems with managing an ever-growing number of features, variations and optimizations has lead to one major effort, dubbed Phoenix 2.0. In this edition of Hacker's Corner, Mikhail and Andreas will share their thoughts and effort (demo!) on rebuilding the Phoenix GUI, making use of as much as possible of the existing functionality, but completely replacing Desktop.qml, in a shift to an app-centric architecture that also challenges the CE architecture as a whole.</description>
        <authors>
            <author>
                <name>Andreas Aardal Hansen</name>
                <ciscoid>andrhans</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/andrhans.jpg</photo>
                <emailoverride></emailoverride>
                <biography>TBD</biography>
                <dummy></dummy>
            </author>
            <author>
                <name>Mikhail TBD</name>
                <ciscoid>TBD</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>TBD</biography>
                <dummy></dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>A perspective on digital pan tilt zoom</title>
        <level>General</level>
        <duration>20</duration>
        <track>A</track>
        <session>09:00-09:45</session>
        <description>Cameras with digital pan, tilt and zoom has come to play an important role in our product portfolio. Combined with the trend of wider-angle lenses, correct handling of lens distortion and digital perspective correction becomes increasingly important.
The presentation will start with a theoretical background and then discuss practical implementation aspects. There will also be a demo.</description>
        <authors>
            <author>
                <name>Torbjørn Kringeland</name>
                <ciscoid>tkringel</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/tkringel.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Joined Cisco in August 2019 as part of the Camera group. Working with handling image corrections on GPU.  Msc.’s in Physics and Cybernetics.</biography>
                <dummy></dummy>
            </author>
            <author>
                <name>Mattias Ahnoff</name>
                <ciscoid>matahnof</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/matahnof.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Team lead and PE with a Msc in Engineering Physics. Joined Tandberg in 2004 and has been working with different aspects of our camera products.</biography>
                <dummy></dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Air quality sensors for collaboration systems – Survey and practical test outcomes</title>
        <level>Advanced</level>
        <duration>20</duration>
        <track>A</track>
        <session>10:00-10:45</session>
        <description>A survey of air quality technologies and sensors available in the market. Strengths and weaknesses of the different technologies. Practical test results from 10 different sensors that have been tested in office and home environments.</description>
        <authors>
            <author>
                <name>Knut Gabrielsen</name>
                <ciscoid>kngabrie</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/kngabrie.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Knut has been working with electronics/RF/antenna development for 25 years. He joined Tandberg/Cisco in 2010 and has been working in the HW team since then. The last three years he has also heavily focused on exploration, testing and integration of environmental, proximity and other relevant sensors for the collaboration systems being developed at Lysaker.</biography>
                <dummy></dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Amazon Timeseries for storing device sensor data</title>
        <level>Advanced</level>
        <duration>20</duration>
        <track>A</track>
        <session>10:00-10:45</session>
        <description>The Blåmandag team is implementing historic Workspace Metrics to enable customers to analyse their Workspace environment using sensor data from our devices (temperature, humidity, utilisation using people count and more). To store this data from hundreds of thousands of devices, we need a scalable time series data store that easily deals with millions of measurements with a long retention. In this talks we look at Amazon Timestream; a fast, scalable, managed time series database service.</description>
        <authors>
            <author>
                <name>Torgeir Johansen</name>
                <ciscoid>torjohan</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/torjohan.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Torgeir started back in the stone age (2006 and 2002) with TANDBERG and has been working on various premise and cloud management solutions, including TMS, Hybrid Services and most recently Device Management.</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
            <author>
                <name>Tom Vasset</name>
                <ciscoid>tvasset</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/tvasset.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Tom started back in the stone age (2006 and 2002) with TANDBERG and has been working on various premise and cloud management solutions, including TMS, Hybrid Services and most recently Device Management.</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Bringing the AV1 video codec into Cisco products</title>
        <level>Advanced</level>
        <duration>20</duration>
        <track>A</track>
        <session>11:00-11:45</session>
        <description>AV1 is a royalty-free video codec released in 2018 by the Alliance for Open Media.  Since its release we've worked hard on a software implementation for our own products.  We'll show that AV1, contrary to popular belief, is suitable for real-time encoding on modest CPU's and even outperforming H.265.</description>
        <authors>
            <author>
                <name>Steinar Midtskogen</name>
                <ciscoid>stemidts</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/stemidts.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Steinar Midtskogen joined Tandberg/Cisco in 2000 and has worked on implementations of the H.261/3/4/5 video codecs and in recent years he participated in the standardization of AV1 and the implementation of the Cisco AV1 codec.</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Build The Right Thing: Methods to Understand What Users Need, Not Just What They Want</title>
        <level>General</level>
        <duration>20</duration>
        <track>A</track>
        <session>11:00-11:45</session>
        <description>If we understand what users really need, we can make more informed product decisions faster, and stick to them with confidence. There are proven ways to getting this knowledge, and we aim to get everyone on the same page to get better, more objective and meaningful discussions throughout the organization.</description>
        <authors>
            <author>
                <name>Vigleik Norheim</name>
                <ciscoid>vnorheim</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/vnorheim.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Vigleik Norheim is the manager for the UX research and service design team.</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Covid-19 audio action – supporting Opus with 40ms rtp packet size</title>
        <level>General</level>
        <duration>6</duration>
        <track>A</track>
        <session>13:00-13:45</session>
        <description>During the ramp-up in the early days of covid-19, there was a need to quickly reduce the load and bandwidth usage on the Webex servers, both for audio and video.
For CE audio, one of these actions was to support receiving 40ms rtp packet for Opus.
This talk touches what decisions we needed to do, both across Webex and internally, to make it work in a best possible way.</description>
        <authors>
            <author>
                <name>Jens Petter Stang</name>
                <ciscoid>jensstan</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/jensstan.jpg</photo>
                <emailoverride></emailoverride>
                <biography>After 17 years in Tandberg/Cisco, I still enjoy working with acoustics, audio processing, and the great people in the team. I stay busy after work hours with my family or sometimes doing some sport activity. But it has to involve a ball in some way :) This year I’ve picked up tennis and play old boys football for Oppegård (when allowed), and also contribute as a self-learned youth volleyball coach for Kolbotn.</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Cultural and behavioral differences in Video Conferencing</title>
        <level>General</level>
        <duration>20</duration>
        <track>A</track>
        <session>13:00-13:45</session>
        <description>Video meetings, just like real meetings are bound to the cultural frame of the participants. We could think a feature or function works identical among all users but there are stark semantic differences.
Based entirely on empirical observations from our customers in China and Qatar.</description>
        <authors>
            <author>
                <name>Agustin Vargas</name>
                <ciscoid>avargasn</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/avargasn.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Agustin is the Product Manager for Cisco Webex Board. Based in Norway he helps conciliate global market demands with product development through design thinking, customer insights and marketing.</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Customers Pro Active Notifications</title>
        <level>General</level>
        <duration>6</duration>
        <track>A</track>
        <session>18:00-18:45</session>
        <description>With our customers connected to cloud and with access to metrics sent by our devices, we have the ability to reach out to our customers pro-actively. The presentation will cover how we currently is utilizing this opportunity and provide some examples.</description>
        <authors>
            <author>
                <name>Roger Bøe</name>
                <ciscoid>roboe</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/roboe.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Roger is managing the Escalation Team for Webex Devices.</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Data visualization tools</title>
        <level>General</level>
        <duration>20</duration>
        <track>A</track>
        <session>19:00-19:45</session>
        <description>The best decisions are made on the basis of facts and data.
We will present the tools we use in process of creating metrics in order to support our management in decision making.</description>
        <authors>
            <author>
                <name>Elzbieta Witowska</name>
                <ciscoid>ewitowsk</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/ewitowsk.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Ela works in Engineering Ops and coordinates process of metrics creation.</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
            <author>
                <name>Dan Peder Eriksen</name>
                <ciscoid>daneriks</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/daneriks.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Dan Peder works in Cloud Team and works on creating Snowflake data tables as well as building Tableau views with metrics.</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
            <author>
                <name>Dan Blyth</name>
                <ciscoid>dablyth</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/dablyth.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Dan is a Data Visualization Consultant and develops Tableau views with metrics.</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Desktop, Cloud and Embedded Systems - A comparison of development roles</title>
        <level>General</level>
        <duration>6</duration>
        <track>B</track>
        <session>09:00-09:45</session>
        <description>As developers in Cisco we have worked on my different projects using different software technologies. In this presentation will give an overview the mindset a developer must have and the challenges faced for each technology.</description>
        <authors>
            <author>
                <name>Denis McHugh</name>
                <ciscoid>demchugh</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Denis is a CE developer with Cloud/Desktop client development experience.</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
            <author>
                <name>Steve TBD</name>
                <ciscoid>TBD</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Denis is a CE developer with Cloud/Desktop client development experience.</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Dual-microphone array</title>
        <level>General</level>
        <duration>6</duration>
        <track>B</track>
        <session>09:00-09:45</session>
        <description>With Ciscos patented dual-microphone array technology we are able to attenuate audio from undesired sources. We will give a basic overview of this technology, as well as findings and improvements we have done while adapting the dual-microphone array to Polaris.</description>
        <authors>
            <author>
                <name>Ragnvald Balch Barth</name>
                <ciscoid>TBD</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>TBD</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
            <author>
                <name>Sindre Grøstad</name>
                <ciscoid>TBD</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>TBD</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>FPGA, what is it?</title>
        <level>General</level>
        <duration>20</duration>
        <track>B</track>
        <session>10:00-10:45</session>
        <description>Through the history of our video endpoints the FPGA has been a part of the hardware in most of our high-end endpoints and cameras, but what is FPGA and why do we use it?
This session will tell you what an FPGA is and take you through the evolution of the FPGA and how we have, and still are, utilizing the chip in our products.</description>
        <authors>
            <author>
                <name>Bjarne Antonsen</name>
                <ciscoid>bjaanton</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/bjaanton.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Bjarne has broad experience working with digital design after completing his education at UIO. Bjarne began his career in 1980 at Norsk Data and has worked with development of ASICs and FPGA designs ever since. After 15 years in Tandberg Data he started in TANDBERG in 2008 and has been involved in the development of nearly all our products using FPGA since then.</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
            <author>
                <name>Jørgen Linnerud</name>
                <ciscoid>jlinneru</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/jlinneru.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Jorgen began his career at TANDBERG after completing his MSc in Electrical Engineer at NTNU in 2008. Through the years he has been involved in most of our endpoints, starting with the C90 codec. He has worked with FPGA development and low-level software, as well as internal tools for bridging between FPGA and software. He is now the team lead of the Platform Devices team.</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Headset Tracking and Directional Audiot</title>
        <level>Advanced</level>
        <duration>20</duration>
        <track>B</track>
        <session>10:00-10:45</session>
        <description>The need for headphones in open work environments is increasing. When using headphones in a call today, the sound seems to be coming from somewhere inside your head. This does not really align with our experience of real life face-to-face communication. A solution inspired by AR/VR is presented here. Keywords: HRTF, binaural audio, ultrasound.</description>
        <authors>
            <author>
                <name>Marcus Widmer</name>
                <ciscoid>marwidme</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/marwidme.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Marcus is an audio signal processing engineer in the audio-team at Lysaker.</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Helix acoustics: the design choices that resulted in great audio quality</title>
        <level>General</level>
        <duration>20</duration>
        <track>B</track>
        <session>11:00-11:45</session>
        <description>Helix, the next generation Webex Board, has been designed with great conferencing quality in mind. This talk will let you in on the details of the microphone and loudspeaker design, and explain why Helix is a great sounding product.</description>
        <authors>
            <author>
                <name>Gisle Langen Enstad</name>
                <ciscoid>gisensta</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/gisensta.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Gisle works in the audio team, developing loudspeaker and microphone solutions for our fantastic devices.</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>How can the Meeting Assistant improve the device experience?</title>
        <level>General</level>
        <duration>6</duration>
        <track>B</track>
        <session>11:00-11:45</session>
        <description>The Meeting Assistant promises more productive and engaged meetings. It can do automatic note-taking, live transcription, and post-meeting follow-ups. What will it mean to incorporate this for devices?</description>
        <authors>
            <author>
                <name>Roar Skomakerstuen</name>
                <ciscoid>roaskoma</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/roaskoma.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Roar works on Room Capture and Intelligence features.</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>How do we develop electronics at Lysaker? </title>
        <level>General</level>
        <duration>20</duration>
        <track>B</track>
        <session>13:00-13:45</session>
        <description>Ever wondered how the process of developing electronics for our endpoints is? The talk will cover the basics from idea to the green boards, the PCBs. An introduction to the electronic hardware world at Lysaker for non-hardware people.</description>
        <authors>
            <author>
                <name>Cecilie Bjelbøle</name>
                <ciscoid>cbjelbol</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/cbjelbol.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Cecilie is team leader for the hardware design team at Lysaker.</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Who's talking? How speaker tracking works, and how we can improve it.</title>
        <level>General</level>
        <duration>20</duration>
        <track>B</track>
        <session>13:00-13:45</session>
        <description>Using microphones to detect the location of the current speaker is is an essential part of SpeakerTrack. In this talk, I will try to explain how this is done. I will
also mention some weak spots, and propose an idea for improvement.
This is based on a talk I gave to a small group of people earlier this year.</description>
        <authors>
            <author>
                <name>Christian Theien</name>
                <ciscoid>chandrea</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/chandrea.jpg</photo>
                <emailoverride></emailoverride>
                <biography>I've been a Cisco developer for 9 years, mainly working on camera related software. Some key areas I've worked with are SpeakerTrack, PresenterTrack and image processing.</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>How Test Driven Development builds quality into the SW </title>
        <level>General</level>
        <duration>20</duration>
        <track>B</track>
        <session>14:00-14:45</session>
        <description>Through a simple pair-programming demo we will try to show how Test Driven Development builds quality into the sw.
By having a lot of small and brutally simple low-level tests, developers can get quick and easy-to-understand feedback from automated tests before potential bugs are committed. This may help reduce the time from code is committed to it can be deployed.</description>
        <authors>
            <author>
                <name>Amen Hussain</name>
                <ciscoid>amhussei</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Amen joined Cisco Lysaker in 2017 and has been working in platform team ever since.
Before that she did her Masters in Telematics from NTNU (Trondheim). She has 3 years of experience with building embedded software in Pakistan before she started her Masters in Trondheim.</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
            <author>
                <name>Torunn Flo</name>
                <ciscoid>torunnfl</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/torunnfl.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Torunn works in the Meetings Area of the Webex Devices SW group (since 2018), mostly with ActiveControl towards the CMS (Cisco Meeting Server).
Before that she worked 10 years in the Audio Team at Lysaker and 15 years with telecommunication in a company called Nera.</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>How the economy leads us to minor changes in creating experiences</title>
        <level>General</level>
        <duration>6</duration>
        <track>B</track>
        <session>14:00-14:45</session>
        <description>The on-going changing economy requires a change in managing the complexity-shift. Successful products support customers and users in adopting change and shifting complexity. This changes the way how products need to service a user and growing user expectations needs to be met by constantly evolving products that support the customer and user to change.</description>
        <authors>
            <author>
                <name>Teresa Kuntze</name>
                <ciscoid>tkuntze</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/tkuntze.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Teresa Kuntze - UX Designer. Experience Designer with the passion to enable collaboration and facilitate change through design and relevant products and service offerings.</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
            <author>
                <name>Richard Bayes</name>
                <ciscoid>ribayes</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/ribayes.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Richard Bayes - Product Manager. Product Manager with a passion on enhancing collaboration and helping end users work more efficiently through technology innovations.</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Title-text</title>
        <level>General</level>
        <duration>20</duration>
        <track>C</track>
        <session>09:00-09:45</session>
        <description>Description-text</description>
        <authors>
            <author>
                <name>Author-name</name>
                <ciscoid>author-id</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Author-biography</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Title-text</title>
        <level>General</level>
        <duration>20</duration>
        <track>C</track>
        <session>09:00-09:45</session>
        <description>Description-text</description>
        <authors>
            <author>
                <name>Author-name</name>
                <ciscoid>author-id</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Author-biography</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Title-text</title>
        <level>General</level>
        <duration>20</duration>
        <track>C</track>
        <session>10:00-10:45</session>
        <description>Description-text</description>
        <authors>
            <author>
                <name>Author-name</name>
                <ciscoid>author-id</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Author-biography</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Title-text</title>
        <level>General</level>
        <duration>20</duration>
        <track>C</track>
        <session>10:00-10:45</session>
        <description>Description-text</description>
        <authors>
            <author>
                <name>Author-name</name>
                <ciscoid>author-id</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Author-biography</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Title-text</title>
        <level>General</level>
        <duration>20</duration>
        <track>C</track>
        <session>11:00-11:45</session>
        <description>Description-text</description>
        <authors>
            <author>
                <name>Author-name</name>
                <ciscoid>author-id</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Author-biography</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Title-text</title>
        <level>General</level>
        <duration>20</duration>
        <track>C</track>
        <session>11:00-11:45</session>
        <description>Description-text</description>
        <authors>
            <author>
                <name>Author-name</name>
                <ciscoid>author-id</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Author-biography</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Title-text</title>
        <level>General</level>
        <duration>20</duration>
        <track>C</track>
        <session>13:00-13:45</session>
        <description>Description-text</description>
        <authors>
            <author>
                <name>Author-name</name>
                <ciscoid>author-id</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Author-biography</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Title-text</title>
        <level>General</level>
        <duration>20</duration>
        <track>C</track>
        <session>13:00-13:45</session>
        <description>Description-text</description>
        <authors>
            <author>
                <name>Author-name</name>
                <ciscoid>author-id</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Author-biography</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Title-text</title>
        <level>General</level>
        <duration>20</duration>
        <track>C</track>
        <session>14:00-14:45</session>
        <description>Description-text</description>
        <authors>
            <author>
                <name>Author-name</name>
                <ciscoid>author-id</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Author-biography</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Title-text</title>
        <level>General</level>
        <duration>20</duration>
        <track>C</track>
        <session>14:00-14:45</session>
        <description>Description-text</description>
        <authors>
            <author>
                <name>Author-name</name>
                <ciscoid>author-id</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Author-biography</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Title-text</title>
        <level>General</level>
        <duration>20</duration>
        <track>D</track>
        <session>09:00-09:45</session>
        <description>Description-text</description>
        <authors>
            <author>
                <name>Author-name</name>
                <ciscoid>author-id</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Author-biography</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Title-text</title>
        <level>General</level>
        <duration>20</duration>
        <track>D</track>
        <session>09:00-09:45</session>
        <description>Description-text</description>
        <authors>
            <author>
                <name>Author-name</name>
                <ciscoid>author-id</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Author-biography</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Title-text</title>
        <level>General</level>
        <duration>20</duration>
        <track>D</track>
        <session>10:00-10:45</session>
        <description>Description-text</description>
        <authors>
            <author>
                <name>Author-name</name>
                <ciscoid>author-id</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Author-biography</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Title-text</title>
        <level>General</level>
        <duration>20</duration>
        <track>D</track>
        <session>10:00-10:45</session>
        <description>Description-text</description>
        <authors>
            <author>
                <name>Author-name</name>
                <ciscoid>author-id</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Author-biography</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Title-text</title>
        <level>General</level>
        <duration>20</duration>
        <track>D</track>
        <session>11:00-11:45</session>
        <description>Description-text</description>
        <authors>
            <author>
                <name>Author-name</name>
                <ciscoid>author-id</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Author-biography</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Title-text</title>
        <level>General</level>
        <duration>20</duration>
        <track>D</track>
        <session>11:00-11:45</session>
        <description>Description-text</description>
        <authors>
            <author>
                <name>Author-name</name>
                <ciscoid>author-id</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Author-biography</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Title-text</title>
        <level>General</level>
        <duration>20</duration>
        <track>D</track>
        <session>13:00-13:45</session>
        <description>Description-text</description>
        <authors>
            <author>
                <name>Author-name</name>
                <ciscoid>author-id</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Author-biography</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Title-text</title>
        <level>General</level>
        <duration>20</duration>
        <track>D</track>
        <session>13:00-13:45</session>
        <description>Description-text</description>
        <authors>
            <author>
                <name>Author-name</name>
                <ciscoid>author-id</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Author-biography</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Title-text</title>
        <level>General</level>
        <duration>20</duration>
        <track>D</track>
        <session>14:00-14:45</session>
        <description>Description-text</description>
        <authors>
            <author>
                <name>Author-name</name>
                <ciscoid>author-id</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Author-biography</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
    <talk>
        <title>Title-text</title>
        <level>General</level>
        <duration>20</duration>
        <track>D</track>
        <session>14:00-14:45</session>
        <description>Description-text</description>
        <authors>
            <author>
                <name>Author-name</name>
                <ciscoid>author-id</ciscoid>
                <photo>file:///C:/Users/gklungso/Documents/PROSJEKT/Intern-jobb/2020%20Tech%20Zone/photos/TBD.jpg</photo>
                <emailoverride></emailoverride>
                <biography>Author-biography</biography>
                <dummy>&#xA;&#xA;</dummy>
            </author>
        </authors>
    </talk>
</conference>`

export default xml_data;

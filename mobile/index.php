<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Over Water Under Fire</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <link rel="stylesheet" href="css/normalize.min.css">
        <link rel="stylesheet" href="css/main.css">

        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body data-role="page">
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
        <div id="scrollbg"></div>
        <div class="frame" id="frame1">
            <div id="logo">
                <img src="img/logo_thin.png">
            </div>
            <div class="embed" id="embed1">

            </div>
            <div class="email">
                <?php
                    if (isset($_REQUEST['email']))
                    //if "email" is filled out, send email
                      {
                      //send email
                      $to = $_REQUEST['email'] ;
                      $subject = 'Your reminder to view Over Water, Under Fire' ;

                      $message = '<html>';
                      $message .= '<head></head>';
                      $message .= ' <body style="font-family:Arial;">
                                        <div id="wrapper" style="background-image:url(\'http://overwaterunderfire.org/mobile/img/email_bg.png\');background-size:100% 100%;background-position:center bottom;background-repeat:no-repeat;max-width:800px;width:100%;margin:0px;height:800px;">
                                            <div id="emailContent" style="width:100%; max-width:800px; text-align:center;margin:40px auto;">
                                                <a href="http://overwaterunderfire.com">
                                                    <div style="width:100%;">
                                                        <img align="center" src="http://overwaterunderfire.org/mobile/img/logo_thin.png" style="max-width:400px;margin:20px auto;"/>
                                                    </div>
                                                </a>
                                                <p style="font-family:Arial;font-weight:200;color:#fff;font-size:24px;text-align:center">This is your email reminder to experience Over Water Under Fire, the newest interactive documentary by Powering a Nation.</p>
                                                <div style="width:100%;text-align:center;margin:30px auto">
                                                    <a style="border:none;text-decoration:none;" href="http://overwaterunderfire.com">
                                                        <img align="center" src="http://overwaterunderfire.org/mobile/img/launch.png" style="max-width:400px;"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </body>';
                      $message .= '</html>';

                      $from = "poweringanation@gmail.com";
                      $headers = "MIME-Version: 1.0" . "\r\n";
                      $headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
                      $headers .= 'From: poweringanation@gmail.com' . "\r\n" .
                    'Reply-To: poweringanation@gmail.com' . "\r\n" .
                    'X-Mailer: PHP/' . phpversion();
                      mail($to,$subject,$message,$headers);
                      echo "<p>Thanks! Your reminder has been sent.</p>";
                      }
                    else
                    //if "email" is not filled out, display the form
                      {
                      echo "<p>This project is best experienced on a desktop.</p>
                <p>Enter your email below for a reminder to view it at home.</p>
                    <form method='post' action='index.php'>
                      <input id='email_input' name='email' type='text'>
                      <input id='email_button' type='submit'>
                      </form>";
                      }
                ?>
            </div>

            <!--<div id="startBtn">Click to begin the iPad experience.</div>-->
        </div>

        <div class="scrollframe">
            <div class="scrollContent">
                <div class="acts">
                    <div id="introText">
                        This is a story about the Colorado River.<br/>
                        How we change the river,</br>
                        And how the river changes us.
                    </div>
            
            <!-- video 1-->
                    <div class="block">
                        <div class="videoTitle">
                            <img align="left" src="img/marker.png">Soldier Without a War
                        </div>
                        <div class="responsiveVid">
                           <iframe src="http://player.vimeo.com/video/69484938" width="500" height="375" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                        </div>
                    </div>

            <!-- text 1 -->
                    <div class="block">
                        <div class="subtext toptext">
                            <h4>The Colorado is young, walled at the bottom of a canyon of its own making. It is temperamental – dangerous as a borrowed warhorse. Rapid water across fallen boulders creating a force, a concussion, a fate. Nations have boomed along its shore only to collapse beside it. Fortunate explorers have staggered away from its cliffs. Recklessly, we launched into a century of consumption – damming, exhausting and dividing the living river beyond recognition.</h4>
                        </div>
                    </div>

            <!-- story 1 -->
                    <div class="block">
                        <div class="videoTitle">
                                <img align="left" src="img/marker.png">Against the Current
                                <div class="subtitle">How the West's Water was Won</div>
                            </div>
                        <div class="storyBox">
                            <div class="storyContent">
                                <p>John Wesley Powell was stuck. The man who would one day be hailed as a legendary explorer, geologist, ethnographer and visionary found himself braced halfway up cliff, in a crevice thousands of feet above the Colorado River, looking for a way higher. </p>

            <p>The nine men waiting below were the remnants of Powell’s Colorado River Exploring Expedition of 1869. Powell had started climbing the cliffs in search of sap from the pine trees lining the top of the canyon in order to caulk the boats battered by the rapids of Cataract Canyon. Many in the group, including Powell, were veterans of the Civil War. Having withstood the agonies of battle, they were again fighting daily hardships—near-drownings, crushed boats and dwindling, mealy rations—to fill in the last remaining blank spot on maps of North America.</p>
<img src="img/POWELL_images/powell1.jpg" /> 
<p class="imageCaption">Major Powell Descends the Colorado River through the Grand Canyon, 1869. Painting by Henry C Pitz,  1935-1939. <span class="imageSource"><a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://americanart.si.edu/">Smithsonian American Art Museum</a></span>.</p>      
            <p> 
Unable to go up or down, Powell went sideways, further into the crevice in which he was wedged. There he rested, then climbed, emerging to a sky free from the confining canyon walls. The river, thousands of feet below, had over millions of years carved the canyons that unfolded before him to the horizon, foretelling the journey Powell and his men had compelled themselves to complete.
            </p>
            <p> 
This expedition, and later Western forays, would lead to Powell’s understanding that water would be the limiting factor in developing the West, and to his questions about who should determine how the precious water would be used. His observations of the river’s capacities would foreshadow the misuse and diversion that would occur within decades and fundamentally change the river’s course through its canyons. 
                <h4>The Coming Storm</h4>
            <p> 
As Powell stood on the brink of the cliff in July of 1869, he saw a storm coming from the south.
            </p>
            <p>
            <em>
    I seek shelter in the rocks; but when the storm bursts, it comes down as a flood from the heavens,— not with gentle drops at first, slowly increasing in quantity, but as if suddenly poured out. I am thoroughly drenched and almost washed away.
            </em>
            </p>
            <p>
Powell’s words, written years later, are a vivid account of nature’s violence. Though a small incident in the life of a canyon, such a deluge could be life-threatening for Powell and his men. Recognizing the storm’s force, Powell descended the cliffs.
            </p>
            <p>
            <em>
Traveling as fast as I can run … the water is running down a dry bed of sand … I hasten to camp and tell the men there is a river coming down the canyon …  We carry our camp equipage hastily from the bank …  then stand back and see the river roll on to join the Colorado.
            </em>
            </p>
            <p> 
Desert storms, like the one Powell encountered, are quick and destructive. Arid desert soils do not absorb rains, and when amassed rainwater encounters a canyon, its velocity and power can bring down the upper walls. Powell and his men witnessed a river of rainwater cascading down the cliffs to join the Colorado, carving new landscapes and depositing new hazards in the river channel below.
            </p>
            <p> 
The river today is significantly less treacherous than the river Powell knew. People have tamed the floods with dams and accounted for every inch of water consumption.  But these developments on the river and the cities and industries that flourish beside it have introduced a new danger. People have gained control of the river, but in exchange they have become utterly dependent upon it, putting themselves in a new position of peril.
            </p> 
<img src="img/POWELL_images/powell2.jpg" />
<p class="imageCaption">The Grand Cañon at the foot of the Toroweap - Looking East. <span class="imageSource">Engraving by William Henry Holmes, 1882</span>.</p>
            <h4>Before Powell</h4>
            <p>
Centuries before Powell explored the Colorado River, another civilization had developed and flourished for well over a thousand years before their reliance on the Salt River, a tributary of the Colorado, left them susceptible to an extended drought. It took about three generations for this civilization to collapse in 1450 A.D. Their descendants call them the <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.azmnh.org/arch/hohokam.aspx">
                    Hohokam
                </a>, meaning “all used up.”
            </p>
            <p>
The Hohokam left an extensive footprint on the landscape. Archaeologists estimate that at its peak, the Hohokam irrigated 110,000 acres to feed about 60,000 to 80,000 people. They farmed squash, beans, corn and agave and ate the jackrabbits they found nibbling vegetables in their fields.
            </p>
            <p> 
Archeologists used to believe the Hohokam accommodated an increasing population by incrementally adding onto their canals. They now know differently. The Hohokam had to calculate the whole system before they built it. They had to know how much water would enter the system and gauge how the water would be distributed through miles of irrigation canals. Building and using these canals required complex math.
            </p>
            <p>
The Hohokam did not pump water to their fields; they let gravity pull the water through the system that branched from large trunk canals to smaller channels that deposited water into the fields. Hohokam canals are precisely graded earthworks took years of hard labor to build. They designed their canals so the water would flow at a consistent speed. If they made their canals too steep, the water would dig out the channel.  If canals were too level, sediment in the slow water would clog the channel.
            </p>
<img src="img/POWELL_images/powell3.jpg" />
<p class="imageCaption">Map of Hohokam Irrigation Canals. <span class="imageSource">Drawn by Omar Turney, 1929</span>.</p>       
            <p> 
The Hohokam’s canals lose about one to two feet of elevation for each mile of canal, a feat that is hard to accomplish even with today’s precision surveying equipment. The canals had to be maintained, too. Every year, people worked together to clear weeds and seal the walls with clay to prevent water seeping out.
            </p>
            <p> 
Building canals is more than hard work; it is cooperation.
            </p>
            <p> 
“People don’t organize and build canal systems through kinship; they do it through putting in labor, knowing they’re going to get a return of land and water,” said Jerry Howard, curator of anthropology at the Arizona Museum of Natural History and an expert on the Hohokam.
            </p>
            <p> 
Howard says younger generations of Hohokam would branch out from their parents’ land by building their own irrigation community. Anthropologists find it significant that the older, established communities provided the builders of new irrigation communities with food during the years of construction, indicating a complex societal organization.
            </p>
            <p>
            <span class="pullQuote">“Conflict resolution is a big thing in irrigation. Irrigation farmers always squabble.”</span> 
The ways people construct their infrastructure can be a solid indicator about the ways their society is structured, Howard says. He believes a decision-making body presided over the irrigation communities, each of which could be as large as 27,000 acres, and resolved water use questions concerning canal building, maintenance and water allocation. “Conflict resolution is a big thing in irrigation,” he says. “Irrigation farmers always squabble.”
            </p>
            <p>
    Howard is attempting to use clues left by these ancient societies to determine any parallels to the modern ways humans manage limited water resources. His investigations into whether the water belonged to communities or was allocated by a dominant political body paralleled what John Wesley Powell argued centuries after the Hohokam civilization collapsed.
            </p>
            <p> 
    Around 1,000 A.D., the Hohokam seemed to have reached the physical limits of the Salt River in central Arizona. Archeologists say Hohokam remains from that time show signs of severe malnourishment and suggest that for 450 years prior to their disappearance, the Hohokam merely eked out a living.
            </p>
            <p> 
“When people drop out of the archeological record and we can’t see them anymore in the ground, it’s hard to know what’s going on,” says Howard. 
To form hypotheses about what happened to the Hohokam, he has looked at modern irrigation societies for characteristics they have in common. 
                <h4>Two Influential Groups</h4>
            <p>
Powell’s first expedition to the West in 1869 made him a national hero. He successfully appealed to Congress for funding for a second trip, which would lead him to encounters with Mormons, as well as Ute, Hopi and Shivwits tribes, groups who had all adapted to thrive in the desert.
            </p>
            <p> 
Only miles from where John Wesley Powell was born in Mount Morris, N.Y., Joseph Smith founded a religion that would profoundly affect the history of the Western landscape. Mormons had been persecuted in the East and settled on the meager lands in Utah Territory around 1847. They learned quickly how to subsist and thrive in the desert by mastering irrigated agriculture.
            </p>
            <p> 
    As a group, Mormons had several advantages. They believed that their great faith that God had given them the desert and the ability to live there. The hierarchical structure of their society unified members completely around the church.
            </p>
            <p>  
    “It freed the communities from individuals squabbling over water rights. It allowed the amassing of capital to undertake new projects and provided a cushion of security when projects failed," says Donald Worster, in his book <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://books.google.com/books/about/Rivers_of_Empire.html?id=2Wrdrt662lYC">
                    <em>Rivers of Empire</em>
                </a>. <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www2.ljworld.com/news/2011/sep/12/16-things-ku-history-professor-environmental-histo/">
                    Worster
                </a> is the author of multiple histories on Powell and on Western development.
            </p>
            <p>  
    Just as it had with the Hohokam, the desert demanded the Mormons work communally. This emphasis on organization helped the church leaders consolidate power and assert that the water belonged to everyone, not individuals.
            </p>
            <p>  
    "That notion, a radical one by the standards of mid-nineteenth century America, was justified by the argument that in such an arid place, where water was scarce and survival easily put at risk, a single authority must have ultimate jurisdiction over its disposal," Worster writes.
            </p>           
            <p>
The communal concept enriched the settlers and the church, which was funded by its people’s mandatory offerings. Mormons’ social structure demonstrated certain characteristics—community cooperation, strong leadership and reliance on scientific knowledge—that John Wesley Powell would one day recommend Congress adopt as guidelines in settling the West.
            </p>
            <p>
            <span class="pullQuote">"He was interested in how this society that had existed for 900 years had been able to survive and develop agriculture based on almost no water."</span>
            </p>
            <p>
Powell also spent time with numerous Native American tribes during his second expedition. “He was interested in how this society that had existed for 900 years had been able to survive and develop agriculture based on almost no water,” Mark Law, historian and board of directors president of the <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.powellmuseum.org/index.php">
                    Powell Museum
                </a>, said of Powell’s time with the Hopi. “They showed him how they made little catchment basins and how they made irrigation ditches. All of this, Powell absorbed like a sponge.”
            </p>
            <p>
Powell learned from the Hopi ways to make a viable living in the desert and that water should be collected and spent judiciously.
            </p>
            <img src="img/POWELL_images/powell4.jpg" />
<p class="imageCaption">John Wesley Powell and a member of the Paiute tribe. <span class="imageSource">Photo by John K.Hillers, 1871-1874. Smithsonian Institution</span>.</p> 
                <h4>Simple Logic</h4>
            <p>
    In his writings, Powell indicated how spending time with Native American tribes and Mormons influenced his ideas. He believed that cooperation at the community level, with respect to water use, held the key to successfully settling the West.
            </p>
            <p>     
    In 1878, he submitted to Congress his <em>Report on the Lands of the Arid Region of the United States</em>. In his report Powell emphasized the importance of organizing political bodies around watersheds, which he defined as “that area of land, a bounded hydrologic system, within which all living things are inextricably linked by their common water course and where, as humans settled, simple logic demanded that they become part of a community."
            </p>
            <p> 
    Powell did not oppose development in the West. But he questioned repeatedly who would control the scarce water so crucial to any settlement.
“It was his vision of how this technological civilization built on water control was to be governed that differed [from the power elite of his time],” writes Worster. “Was it to be run by capitalists or by the people?”
            </p>
            <p> 
            <span class="pullQuote">Powell proposed that because water was so fundamental to the future of the West, political borders should be drawn according to the region’s water resources rather than along imaginary meridians.</span> 
    Powell was emphatic that the West represented a chance for the American people to control their resources and destiny. Powell proposed that because water was so fundamental to the future of the West, political borders should be drawn according to the region’s water resources rather than along imaginary meridians. He even drew a map famous for proposing states’ borders along the lines of watersheds.
            </p>
            <p> 
“These new units, not states or territories, would resolve issues of water sources in rivers flowing across political boundaries,” says a section on Powell in a history of the U.S. Bureau of Reclamation.
            </p>
            <p> 
    Powell suggested that the government grant people large tracts of land on which they would be encouraged to form and control small communities, herding or grazing cows or sheep. These communities would subsistence farm with the help of small dams or diversions. Congress, however, resisted these notions of restricted development.
            </p>
            <p> 
    In the same way that blank spots on a map called out to the explorer, the undeveloped areas on the newly complete map of the United States motivated politicians.
            </p>
            <p>
                <span class="pullQuote">“Western water and land interests were fearful that Powell and his ideas would place a moratorium on Western development.”</span> 
“Western water and land interests were fearful that Powell and his ideas would place a moratorium on Western development and reverse a century-long policy of the disposal of the public lands,” explains the history of the U.S. Bureau of Reclamation.
            </p>
            <p> 
As private money gained a foothold in development rather than the small, water-minded communities Powell supported, a severe drought in the 1890s caused the ruination of settlers who had attempted individual irrigation projects rather than follow the model of success set by the Mormons and Native Americans. Simultaneously, an economic downturn suppressed some of the private money that had buoyed development until then.
            </p>
            <p> 
“[The farmers and developers] were forced to admit that in order to sustain their population advance in the face of an adverse climate, they needed irrigation – and on a big scale,” writes Worster.
            </p>
            <p> 
Persevering through these less than ideal conditions rather than relenting to nature, farmers and developers convened in Los Angeles at the second annual International Irrigation Congress. In August 1893, they gathered to rally their cause, galvanize their following, and appeal to the federal government for support.
            </p>
            <p> 
They needed governmental support to fund the large water projects they believed would sustain the expansion they envisioned. There, Powell told the assembled hopeful simply, “You are piling up a heritage of conflict and litigation over water rights for there is not sufficient water to supply the land.”
            </p>
            <p>
But no one listened.
            </p>
                <h4>Rising from the Ashes</h4>
            <p>
Powell’s explorations had culminated in a clear message: Populations in the West should not become dependent on the region’s limited water resources to sustain large, permanent communities.
             </p>
            <p>
Centuries before Powell’s journey, the Hohokam’s abrupt collapse had proven this thesis to be true. Since Powell’s explorations and predictions, people have come to realize the truth of his forecasts that concentrated development leads to water dependence and vulnerability.
            </p>
            <p>
In 1868, more than 400 years after the Hohokam disappeared from the archaeological record and a year before Powell’s first expedition down the Colorado, a man named Jack Swilling had come across some ditches in the <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://phoenix.gov/citygovernment/facts/history/">
                    Arizona desert
                </a>. They were ancient Hohokam irrigation canals. With a little work, he and some others excavated them and once more used them to divert water to irrigate land, on which they grew hay to feed government horses. Sensing economic opportunity, others soon joined them, and a small settlement formed on the banks of the Salt River, a tributary of the Colorado. In 1870, the population numbered 235 people, and by 1900, the county recorded 20,457.
            </p>
            <p> 
The roughneck founding fathers had squabbled briefly over what to name their growing village. <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.azcentral.com/needlogin?type=login&redirecturl=http%3A%2F%2Fwww.azcentral.com%2Ftravel%2Farticles%2F2011%2F05%2F12%2F20110512jack-swilling-father-phoenix.html%3Fnclick_check%3D1">
                    Swilling
                </a>, a Civil War veteran, favored calling it Stonewall, after the Confederate general. Another man suggested something more classical.
            </p>
            <p>
They should call it Phoenix.
            </p>
            <p>
That once dusty settlement is today a city of <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://quickfacts.census.gov/qfd/states/04/0455000.html">
                    1.5 million people
                </a> who <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://phoenix.gov/waterservices/wrc/yourwater/">
                    depend heavily
                </a> on the Colorado River and its tributaries for water. Powell, the visionary, would not be surprised.
</p> 
<img src="img/POWELL_images/powell5.jpg" />
<p class="imageCaption">Powell's Map proposing political units be organized by watershed. <span class="imageSource">U.S. Geological Survey</span>.</p>

                            </div>
                        </div>
                        <div class="scrolldown"></div>
                    </div>

            <!--video 2-->
                    <div class="block">
                        <div class="videoTitle">
                            <img align="left" src="img/marker.png">Forged by Fire
                        </div>
                        <div class="responsiveVid">
                         <iframe src="http://player.vimeo.com/video/69485073" width="500" height="375" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                        </div>
                    </div>

            <!-- text box 2 -->
                    <div class="block">
                        <div class="subtext">
                            <h4>We never know what will forever change us.</h4>
                            <h4>An event is incited suddenly; the aftermath can be more complicated.</h4>
                        </div>
                    </div>

            <!-- graphic 1 goes here -->
                    <div class="block">
                        <div class="videoTitle">
                                <img align="left" src="img/marker.png">A River Dammed
                            </div>
                        <div class="responsiveVid">
                            <iframe src="http://player.vimeo.com/video/69622260" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                        </div>
                    </div>

            <!-- graphic 2 goes here -->
                    <div class="block">
                        <div class="videoTitle">
                                <img align="left" src="img/marker.png">A Dam for the Ages
                            </div>
                        <div class="responsiveVid">
                            <iframe src="http://player.vimeo.com/video/69627661" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                        </div>
                    </div>

            <!-- story 2 -->
                    <div class="block">
                        <div class="videoTitle">
                                <img align="left" src="img/marker.png">
                                Landgrab
                                <div class="subtitle">What Happens When You Go Against the Flow</div>
                        </div>
                        <div class="storyBox">
                               <div class="scrolldown"></div>
                            <div class="storyContent">
                                <p>
                                    <div class="quotation">"One does not really conquer a place like this. One inhabits it like an occupying army and makes, at best, an uneasy truce with it.”
                                        <br><p>-Marc Reisner, <em>Cadillac Desert</em></p></div>
                                </p>
                                <img src="img/LANDGRAB_images/landgrabMinidoka.jpg" /> 
<p class="imageCaption">Minidoka Project. <span class="imageSource">Photo by Harris & Ewing. Courtesy Library of Congress</span>.</p>
            <p>       
MINIDOKA IRRIGATION PROJECT, IDAHO, 1960s. Robert King, bundled in flannels and wearing thick boots, pulls a cumbersome siphon from the ditch that divides his family’s 200-acre farm. He maneuvers the siphon to a furrow in the soil, sprinkled with budding wheat, alfalfa and potatoes. The wind picks up, hurling dust and water everywhere. If it were warmer, he thinks, he wouldn’t mind getting wet.           </p>
            <p>
Shielding his eyes and shivering as spring chill whips about him, King can just make out where the ditch tumbles over a nearby hill. Beyond it, Minidoka Dam holds back the farm’s lifeblood in Walcott Lake; without the lake and the sinuous Snake River that feeds it, thirsty crops wouldn’t stand a chance.
            </p>
            <p>
The opportunity to care for this land came twelve years earlier when his father, Vern King, returned to Idaho from combat in Korea. He wrested an opportunity to start fresh by entering a Bureau of Reclamation lottery to win land in the Minidoka Irrigation Project, the million-acre expanse where he had grown up working on his father’s farm.           </p>
            </p>
            <p>
“All the local veterans put in for it, and he was the only one who was drawn,” King says proudly.             </p>
            <p>
Foregoing an engineering degree at Michigan State University, Vern King brought his wife and then 1-year-old son Robert nine miles down the road from his grandfather’s farm to start his own. If Vern could irrigate unruly volcanic dirt successfully within a few years — with the help of government-built waterways — he could keep it.            </p>
            <p>
Nearly 60 years later, the farm still operates with the younger King’s cousin at the helm. It hasn’t been easy, King says, but for the families who figured out the land, it was worth it — just as settlers moving west had learned as early as the mid-1800s.         </p>
            <p>
Congress supported agriculture to encourage Western settlement, King notes. “They generated the opportunity for farmers in the West to generate revenue.”  Irrigation, he adds, “allows us to have the kind of country that we have today.”         </p>
            <p>
Today, people still flock west. Irrigation supports more than 40 million people in the Colorado River Basin’s <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.britannica.com/EBchecked/topic/126494/Colorado-River">246,000 square miles</a> of riverbed, farmland and cities in some of the <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://gis.ncdc.noaa.gov/map/drought/US#app=cdo">driest states in the country</a>. When presented with a map of the region, some wonder why the largest populations of Americans using the Colorado are nowhere near it. They wonder why <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.usbr.gov/lc/region/programs/crbstudy/finalreport/Executive Summary/Executive_Summary_FINAL_Dec2012.pdf">5.5 million acres of irrigated land</a> and cities far away on the Pacific Coast even developed at all. How is it possible that these cities are still growing when the river and animals that rely on it are under duress, so much so that the Colorado River was named <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://azdailysun.com/lifestyles/columnists/earthtalk-overtaxed-colorado-tops-endangered-rivers-list/article_ce930b2b-c872-59b3-97f5-861902e3a1a3.html">2013’s most endangered river in the country</a>?            
</p>
<p>
<span class="pullQuote">“The river is in the emergency room. It’s got tubes in it, and it's being monitored, and it's about to die. But we don't want it to happen, so we just put more machines into it.”</span>
            </p>
            <p>
“People seem to think that we delight in destroying the environment,” says King, speaking as an <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.usbr.gov/uc/rm/amp/amwg/amwgbioALT_king.html">interstate water policymaker in Utah who</a> irrigates on a much grander scale than a Minidoka farm. King works with people from each basin state to create strategies in operating dams along the Colorado. It’s not his job to tell people how to use their water, he says, but to make sure water managers take only their designated shares of it. Today the river is managed based on “a series of tradeoffs made in the past,” he notes. 
</p>
<p>
“We’re still trying to minimize the environmental impact with what’s already there and what’s already developed,” he says, but dams “are an integral function of being able to live in the West.”
</p>
<p>
Historically, civilizations rose along the banks of freshwater sources, with bodies of water defining city-planning schemes. But cities using the Colorado River couldn’t be restricted to and defined by a river. Instead, they sought to define it, and tug silty flows throughout the Southwest to make the desert bloom. Keeping the river healthy, observers say, hasn’t always been a priority.
</p>
<p>
Historians and activists argue that the river’s current shape and the way Westerners have and do use it reflects a century of short-term solutions to problems that needed long-term ones.
</p>
<p>
“The river is in the emergency room,” says <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.livingrivers.org/staff.cfm">John Weisheit</a>, conservation director at non-profit agency Living Rivers. “It’s got tubes in it, and it's being monitored, and it's about to die. But we don't want it to happen, <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://magazine.nature.org/features/watered-down.xml">so we just put more machines into it</a>.”
</p>
<p>
<h4> Establishing Claims </h4>
</p>
<p>
When President Thomas Jefferson bought 800,000 square miles of land from Napoleon in 1803 for $15 million, he did so in part as a protectionist measure. 
</p>
<p>
“One of the lessons of the settling of North America by European nations was that, to hold onto land, you needed to settle the land,” says water expert <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://lawweb.colorado.edu/profiles/profile.jsp?id=87">Douglas Kenney</a>. “Ensuring settlement became a high national security objective.”
</p>
<p>
Fearing a <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.nwcouncil.org/history/LewisAndClark>">possible French</a> empire in North America (and lingering Spanish and British aspirations), Jefferson jumped to claim the region first and then see what it was worth. However, his proactive measures set a precedent for American motivations that influenced resource use: take it before someone else can. 
</p>
<p>
With vulnerable country and little direction as to what to do with it, Jefferson deployed Army volunteers Meriwether Lewis and William Clark to explore the West under the pretext of monopolizing fur trading with natives before the British could. 
</p>
<p>
Lewis and Clark’s evaluations were inconclusive, but many contemporaries’ appraisals of the land were clear-cut. Explorer Zebulon Pike said that Americans should “leave the prairies incapable of cultivation to the wandering and uncivilized.” The reaction to Lewis and Clark’s reports confirmed as much; their reports resonated with fur-trapping mountain men looking for beavers, wealth and adventure. They descended upon the region, collecting pelts in droves. Beaver populations, like many western resources, soon dwindled. 
</p>
<p>
After the War of 1812 substantially delayed British conquest in North America, Americans weren’t so much concerned with taking things first but in claiming what they considered rightfully theirs. Gov. William Gilpin of the Colorado Territory was an early proponent of Manifest Destiny, the idea that Americans were meant to conquer the continent. He envisioned that ideal empire in his book, <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://archive.org/stream/centralgoldregi00gilpgoog#page/n8/mode/2up"><em>The Central Gold Region</em></a>.
</p>
<p>
Although stunted, he wrote, the country could <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://archive.org/stream/centralgoldregi00gilpgoog#page/n12/mode/2up">set the bar</a> for empire by constructing a transcontinental railroad. America, situated between Asia and Europe amidst a wealth of raw material, would “lead the host of nations to a new order of civilization” by developing faster trade, reaping profits from that trade and reinvesting in industry. 
</p>
<p>
Western senators, speculators and a burgeoning railroad industry agreed. A transcontinental railroad would reduce dependence on lengthy and costly maritime shipment of resources back East. States zigzagged with railroads would have greater chances of population growth and trade, extending not simply a U.S. flag but a very <em>rich</em> U.S. flag throughout the western territory.
</p>
<p>
The only threat to that civilization: the wild lands in between. To Gilpin, river basins and mountains unsuitable for trains had no value. They were obstacles to progress until they were <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://en.wikiquote.org/wiki/Manifest_Destiny>">subdued</a>. 
</p>
<p>
<span class="pullQuote">“The West was going to save the United States from inevitable decay. They were going to trade space for time.”</span>
</p>
<p>            
Decision makers “weren't thinking ecologically,” says <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://republicofnature.com/about-mark">Mark Fiege</a>, a professor of history at Colorado State University. “They were thinking in a powerful way, but it was deeply reductive and very authoritarian toward the environment and toward people.”
</p>
<p>
Early thinkers like Jefferson thought every civilization had a lifespan and that settling people in a new, undeveloped frontier with wealth potential could give America adrenaline.
</p>
<p>
“The West was going to save the United States from inevitable decay” or forestall it, Fiege says. “They were going to trade space for time.” 
</p>
<p>
For development to happen, officials would need to do more than induce a few settlers into visiting the West. Under precedent of the Homestead Act of 1862, which gave settlers land in the Great Plains, politicians and businessmen set about devising how to induce a mass migration to western seaports and rivers close by. The West and its resources — gold, timber, coal, and the like — would be harvested and shaped to the will of the American people through small farming and land ownership.
</p>
<img src="img/LANDGRAB_images/landgrabRailroad.jpg" /> 
<p class="imageCaption">Celebration of Westward Expansion. <span class="imageSource">Drawing by F.F. Palmer. Lithograph by Currier & Ives. Courtesy Library of Congress</span>.</p>
<p>
<h4>A Shallow Appraisal: Jumping the Gun</h4>
</p>
<p>
At the first Irrigation Congress, held in Salt Lake City in 1893, scientist and explorer Major John Wesley Powell beseeched irrigation boosters to take a step back and look closely at the Colorado River basin’s capacity. He had rafted and assessed the river’s length and felt a need to burst their empire-focused bubble. Big players in the irrigation movement bridled as Powell laid out the facts: 
</p>
<p>
<a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://books.google.com/books?id=tHRMRUH2XX0C&pg=PA529&lpg=PA529&dq=john+wesley+powell+#v=onepage&q=john wesley powell">When all the rivers are used, when all the creeks in the ravines, when all the brooks, when all the springs are used, when all the reservoirs along the streams are used, when all the canyon waters are taken up, when all the artesian waters are taken up, when all the wells are sunk or dug that can be dug in all this arid region, there is still not sufficient water to irrigate all this arid region.</a>
</p>
<p>
But short-term political goals and greed made decision makers shortsighted. When economic depression hit in the 1890s, the need for immediate and sweeping solutions obscured honest recognition of what the West’s limited water resources could handle. Settlers must move West not only to improve America’s chance at continental empire, said ‘Gilpinites’ who followed the principle of Manifest Destiny, but also to develop resources and build back the nation from depression and the Civil War as soon as possible. Somehow, the land would be irrigated.
</p>
<p>
In 1902, a handful of western senators interested in mobilizing promising raw materials in their states and increasing their populations finally found a friend in then-President Theodore Roosevelt. He authorized the creation of a new federal agency, the Reclamation Service, and put it to work manipulating western rivers toward settlers’ farms. Irrigation projects would be funded through sale of public lands. 
</p>
<p>
At the same time, Roosevelt authorized the Newlands Act named for Sen. Francis Newlands of Nevada, allowing farmers to keep land if they irrigated it with water from federal irrigation projects. The independently wealthy Newlands had attempted large-scale irrigation projects on his own but failed for lack of funding; he realized that only a budget as large as that of Congress’ would enable his dream. 
</p>
<p>
To rationally go about changing the landscape and persuading settlers to move west, irrigation boosters had to find evidence refuting Powell’s argument about the river basin’s limitations. An alterative notion explained briefly as “<a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://search.proquest.com.libproxy.lib.unc.edu/docview/174410927/13ED1FF37B492C9FC1/3?accountid=14244">rain follows the plow</a>” answered this need. No matter how arid the land, the idea held, farming would make the air around it more humid; tilling dirt exposed loamy earth that could better retain rain. Although the region usually did not get much rain, a climatic blip about that time made the West slightly wetter than usual, and the notion gained steam. With fervor stirred for land reclamation, people moved to the West. 
</p>
<p>
“I think they oversold it,” King says. “People didn’t realize how much hard work it would be.”
</p>
<p>
King, whose first memory is being on a tractor at age 5, didn’t know anything but the farm until he was 20 years old. Today, he realizes how difficult working the land really was. Even farmers in the more modern-day Minidoka Project weren’t prepared to spend three years clearing sagebrush and rocks that hurt farm equipment and irrigating before their plots could go into full production. Unlike King, who was trained to work the land by both his father and grandfather, most settlers found they hadn’t been so clear on what to do with land they’d been hasty to nab. 
</p>
<p>
<span class="pullQuote">“Many projects thus wound up where they were bound to fail, though no one told the homesteaders.”</span>
            </p>
            <p>
“It was dry and hot and windy, which are all things that are not as common back east,” King says. “It’s pretty bleak compared to say Illinois and Ohio where it’s green and lush.”
</p>
<p>
Simply moving West proved not to be a farming cure-all. Many didn’t know how to irrigate arid land, let alone any land. The ones who stuck with it couldn’t grow enough in the dry dirt to pay back their loans — most of the projects had been built where politicians wanted them, rather than where surveyors said they should be. 
</p>
<p>
“Many projects thus wound up where they were bound to fail,” James Powell writes in <em>Dead Pool</em>, his examination of reclamation, “though no one told the homesteaders.” 
</p>
<p>
After two decades of reclamation, only 11 percent of loans had been repaid. A <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://books.google.com/books?id=Zy-hKDlULjMC&pg=PA76&lpg=PA76&dq=Fact-Finders+Report1924&source=bl&ots=-k7RgS7j3Q&sig=fXzWOAmUH2q1m5bdbhT2iF27tRE&hl=en&sa=X&ei=42rHUY-1AoHW9ATH34HgCw&ved=0CDUQ6AEwAQ#v=onepage&q=Fact-Finders Report1924&f=false">report</a> released in 1924 revealed the Reclamation Service’s lack of oversight. Approximately 95 percent of the landowners receiving money for irrigation never actually irrigated their land. Somehow, projects had been built on private lands instead of the public ones whose sale would pay for dam construction. Congress gave prime public lands away for mining and railways, allowing railroad companies to create monopolies on plots nearest their tracks and to hike shipping costs to farmers. Many farmers quickly gave up, and the majority of those who didn’t could grow only cheap surplus crops like alfalfa and wheat, not earning enough to pay for use of water. The more loan defaults threatened, the more the Reclamation Service extended the loan period — to the point where many farmers would die before <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.gao.gov/archive/1997/rc97150t.pdf">repaying their loans</a>. Some sold land to speculators. All the while, <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://books.google.com/books?id=Akn6rUgR_eEC&pg=PT117&dq=fact+finder+reclamation+service&hl=en&sa=X&ei=UMLDUYDxL4Pk9ATNooD4Cg&ved=0CDUQ6AEwAA">Congressmen looking to serve more voters and boost economies asking to build projects</a> in their states, too.
</p>
<p>
“The sponsors of Federal reclamation believed it would be a simple matter to change arid, unimproved land into farms,” the study <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.nps.gov/nr/twhp/wwwlps/lessons/141RioGrande/141facts2.htm">authors wrote</a>. “Time has shown that this was a mistake. It is beginning to be realized that [irrigation] development requires a study of agricultural and economic problems, and the working out of settlement and development plans if the land is to be brought under cultivation without disastrous delays and waste of money and efforts.” 
</p>
<p>
By the time the study appeared, small farmers weren’t the Reclamation Service’s focus. As often happens after scandals, the Reclamation Service rebranded and changed its structure. It became the Bureau of Reclamation, an office under the direction of the Department of the Interior. It also began focusing mostly on the demographics that could support more exciting and lucrative projects; Congressmen, looking to serve more voters and boost economies, were asking to build in their states, too. 
</p>
<p>
<h4>Shifting Priorities</h4> 
</p>
<p>
The will to wrestle and overcome the environment came to a head with Southern Californians between 1900 and 1920. Residents of the newly rebranded Imperial Valley found themselves with a farming Mecca on their hands, save for the lack of a stable water supply. They hoped to farm the land between the Colorado and the bed of what had once been the Alamo River.
</p>
<p>
In 1900, engineers from a private company redirected Colorado River water into the Alamo successfully but hastily; 700 miles of canals made 75,000 acres fit for farming, but the canals kept clogging with silt. As a solution, they cut a new canal across the border in Mexico. It started filling before the Mexican government approved it. 
</p>
<img src="img/LANDGRAB_images/landgrabHoover.jpg" /> 
<p class="imageCaption">Construction of Hoover Dam. <span class="imageSource">Painting by William Gropper. Courtesy Smithsonian American Art Museum</span>.</p>
<p>
Lead engineer C.R. Rockwood accidentally helped reawakened not only the Alamo River but also a bygone inland lake named the Salton Sea. When the Colorado flooded in 1905, the river plunged into the Salton Trough — a sink big enough to hold more than half its annual flow – and destroyed <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://books.google.com/books?id=OTh8b2cyGBcC&pg=PA213&dq=creation+of+salton+sea+12+million+acres+destroyed&hl=en&sa=X&ei=Nx_LUfHpB4_s9AS37IHYBg&ved=0CC0Q6AEwAA#v=onepage&q=creation of salton sea 12 million acres destroyed&f=false">330,000 acres of crops</a>, rendering the farmland permanently unworkable. A new canal – one that didn’t go through Mexico, to avoid any water conflicts – would be necessary. 
</p>
<p>
Two hours west, Los Angeles was insatiably thirsty. Its population grew exponentially in the wake of two gold rushes, as did its value: It lay at the crux of bustling seaports, farmlands and railways, key ingredients for trade. <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.pbs.org/weta/thewest/people/i_r/mulholland.htm">William Mulholland</a>, superintendent of the city’s Department of Water and Power, had nabbed the northern Owens River out from under small farmers through water rights purchases and the support of wealthy agriculture tycoons in the San Fernando Valley. But even the Los Angeles Aqueduct couldn’t supply the needs of both city folk and farmers. 
</p>
<p>
The Bureau of Reclamation had been busy with smaller projects during World War I, but by its end, Powell’s nephew <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://search.proquest.com/docview/537353699/13EE70BE59A6F4F755A/3?accountid=14244">Arthur Powell Davis</a> was in charge. Powell Davis believed that only a dam could sustain cities in need of drinking water and put down the floods that threatened farms. What’s more, because the river plunges 12,000 feet over the course of its 1,440-mile journey from La Poudre Pass Lake in Colorado to the Gulf of Mexico, the Colorado made dam hydropower effective and canals efficient. The residents of the Imperial Valley and Los Angeles were willing to lobby for the necessary waterworks: two channels and a flood-curbing dam.
</p>
<p>
“The Reclamation Service sees the handwriting on the wall,” professor Fiege says. “They recognized that rural people are running into trouble, and they realized that if you want to have a political power base, you’ve got to look to where the population is, and that's the cities.”
</p>
<p>
As early as 1900, author William Smythe did, too. Calling the rich soil along the Colorado’s banks a “gift of the river” for the purpose of American prosperity, he noted the significance of controlling water.
</p>
<p>
“What is the key that will unlock the door to modern enterprise and human genius? It is the Rio Colorado,” <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://books.google.com/books?id=-xu8grhp9T8C&pg=PA293&dq=#v=onepage&q=">he wrote</a>. “Whoever shall control the right to divert these turbid waters will be the master of this empire.”
</p>
<p>
Black Canyon, along the border of Arizona and Nevada, was chosen as the site of the Hoover Dam. The Colorado River Aqueduct’s 242 miles of siphons, pumps and canals would extend 242 miles from Lake Havasu in Arizona to Los Angeles; eighty miles of canals would bring water from the Imperial Dam to the Imperial Valley. 
</p>
<p>
<span class="pullQuote">“Water is the critical thing lacking to have a wonderful life.”</span>
            </p>
            <p>
The Hoover Dam became a source of pride for the Bureau of Reclamation and Congress. Curved and massive, the concrete <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.merriam-webster.com/dictionary/arch-gravity dam">arch-gravity</a> dam would soar more than 700 feet into the air, catapulting into record books. The dam squats mightily downstream of Lake Mead, a reservoir deep enough to capture 28.5 million acre-feet — 9.2 million gallons, or <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.jsonline.com/news/wisconsin/wisconsin-uses-over-2-trillion-gallons-of-water-a-year-4q8p3fb-192763861.html">four times what Wisconsin uses annually</a>. Today, the dam’s <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.usbr.gov/lc/hooverdam/faqs/powerfaq.html">19 generators produce enough energy to power 1.75 million average American homes</a>. Hoover’s hydropower also could fund its construction; with the last generator’s installation, it became the most powerful hydropower facility in the world. Building the dam cost <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.usbr.gov/lc/hooverdam/History/essays/fatal.html">$49 million and more than 100 deaths throughout construction</a>. 
</p>
<p>
While the main pretense of the dam was to protect against floods, the reservoir would provide the two things that make societies flourish: power and dependable water. 
</p>
<p>
 “Water is the critical thing lacking to have a wonderful life,” <em>Dead Pool</em> author Powell adds. “If you put yourself in the mindset of the people in the ‘20s and ‘30s I mean, we’d all build Hoover Dam if we could.”
</p>
<p>
A boon to the New Deal agenda, dam building employed hundreds of jobless young men. Dams later provided electricity critical in developing military vehicles, artillery and the like. 
</p>
<p>
In the end, the benefits of dams compounded by a drive to subvert the river’s power for electricity or other uses made damming the Colorado River an obvious choice to residents and legislators. But prospects of big dams made basin state officials worry about future access to the river, leading the way for a series of heated negotiations.
</p>
<p>
<h4> Dividing the Spoils </h4>
</p>
<p>
While measures were being put in place to give California its canals, the Supreme Court handed down a ruling that upended traditional western water use and solidified the importance of getting to western resources first.
</p>
<p>
Traditionally, anyone who owned land on a river could use the water flowing through it, a notion known as <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://search.proquest.com/docview/159464612/13EDC92C5F26B1ECDC/5?accountid=14244">riparian</a> (or “river bank”) law. However, the court’s <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://search.proquest.com/docview/100628936/13EDC9567CA34F6F913/3?accountid=14244">1922 ruling in Wyoming v. Colorado</a> replaced that doctrine with a new view on water use known as <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.cobar.org/tcl/tcl_articles.cfm?articleid=4063">prior appropriation</a>, briefly defined as “first in time, first in right.” No matter who owned land along a riverbank, the first people ever to have used the water had first dibs annually. That change established a premise for water use still observed throughout the basin today.
</p>
<p>
Prior appropriation “has everything to do with the mess that we're in today,” says <em>National Geographic</em> contributer Jonathan Waterman. “In fact, whenever you get a good idea for conservation, you then have to address the prior appropriations doctrine and figure out ways around it.”
</p>
<p>
<span class="pullQuote">“To change water use, you’d have to get new losers to get new winners. It’s a finite resource. Somebody has to lose their water.”</span>
            </p>
            <p>
The ruling worried officials in the six other basin states. California had used the river first decades before, and its thirsty population wanted to fund the pricey waterworks. With a head start of being “first in right,” California could drain the river before other states claimed their share. 
</p>
<p>
Representatives from the seven states crammed into a Santa Fe lodge in 1922, hoping to set up a system for sharing the river before Congress approved the dam and channels. Then-Secretary of Commerce Herbert Hoover led the commission that came out with the <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.usbr.gov/lc/region/pao/pdfiles/crcompct.pdf">Colorado River Compact</a>, the first part of a doctrine known as the Law of The River, just in time.
</p>
<p>
    “In hindsight, it’s easy to see <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://blogs.umb.edu/buildingtheworld/energy/hoover-dam-and-colorado-river-compact-united-states/">lots of drawbacks</a> depending on what your value set is,” King says of the Compact. “I think they did a good job, but <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://search.proquest.com/docview/104228274/13EDC95B81D34F6F913/1?accountid=14244">there wasn’t a consensus</a>. There was political horse trading, both in Congress and within the states, and acknowledgement that there would be impacts.”
</p>
<p>
    Apart from dividing river water, the commissioners decided how the water should be used. The Compact’s first article lists proper uses, or beneficial uses of the water, for industry, home use, energy and above all agriculture. A goal of protecting the river wasn’t considered. 
</p>
<p>
    “At that time, conservation meant holding water in reservoirs for use during dry periods, which is a bit different than how we think of conservation now,” King says.
</p>
<p>
The states couldn’t agree on how to divide the water by states, even after six years of negotiations, so Hoover and commissioner Delph Carpenter scrapped determining distributions to individual states. Instead, they decided to split the states into an Upper and Lower Basin, divided at Lee’s Ferry, Ariz. Each basin would get slightly less than half the river’s annual, leaving buffer room in case of drought, or if Mexico wanted in on the deal.
</p>
<p>
“(The) proposal thus solved one problem only to create another” by delaying state appropriations, Powell writes in <em>Dead Pool</em>, “but it did allow the commissioners to show that they had accomplished something.”
</p>
<p>
Each basin was given 7.5 million acre-feet of water, about a quarter of what Lake Mead could hold, and what the commissioners believed to be slightly less than half of one year’s average annual flow, leaving a buffer in the event of drought. The Lower Basin — including California — had primary water rights. However, the data they used were incomplete. The commission expected 18.5 million acre-feet to be available each year, overestimating by about 3.5 million acre-feet. The commission had only 20 years of thorough stream flow records, and it would be decades before they found out that those were the wettest years the basin had seen in centuries. The supposed buffer was <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.climas.arizona.edu/files/climas/images/feature-articles/feb2009_fig2.gif">entirely imaginary</a>.
</p>
<p>
In addition to assuming that water flows had been normal for the prior few decades, the commissioners made another assumption when the Compact was ratified as part of the <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.usbr.gov/lc/region/pao/pdfiles/bcpact.pdf">Boulder Canyon Project Act</a> in 1928. In the Act, Congress approved $165 million for construction of the dam at Boulder Canyon and the All-American Canal to the Imperial Valley; put the Secretary of the Interior in charge of the Lower Basin; and then divided how much water would go to the Lower Basin states when the states’ representatives couldn’t decide how to do it themselves. The Californian majority gained the most and more than any other state. More than that, Californians won the right to use any water the other states failed to use, setting Californians up for decades of feeling like they had more water than they really did. 
</p>
<p>
    More resources put canal-backing California in a position to maintain its population growth and political power, professor Fiege says.
</p>
<p>
    “Most people think that everything pertaining to a state begins and ends at the boundary of a state,” he says, “but California commands an enormous amount of power.”
</p>
<p>
Despite giving California special consideration, the commissioners went ahead <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://search.proquest.com/docview/150304517/13EDC92C5F26B1ECDC/13?accountid=14244">without Arizona’s consent</a> in their haste to agree, precipitating three decades of infighting. 
</p>
<p>
Consideration for key players — Mexicans and Native Americans — was minimal. Should Mexico ever want water, the commissioners wrote, the supplies would have to come from surplus. The river’s health was never explicitly considered.
</p>
<p>
Today, distribution of populations throughout the Southwest is quite different than in 1928, and the Compact’s flaws have become apparent. Water administrators, such as King, find themselves considering the Compact with a lawyer’s meticulousness to provide for their constituents.
</p>
<p>
    “We kind of have adjusted the interpretation, not adjusted the Compact,” King says. “The first rule of the Law of The River is whatever the seven basin states and the federal government can agree to can probably be worked into the Compact.” 
</p>
<p>
    Some people would like to scrap the system altogether and start fresh, King says, but doing so would be reckless. Agreements like the Compact have a lot riding on them. 
</p>
<p>
With something “that impacts this many people, that has infrastructure built upon it, you just can’t go in and change things overnight,” he says. “Otherwise, you’d end up with some pretty drastic consequences. 
</p>
<p>
“To change water use, you’d have to get new losers to get new winners,” he says. “It’s a finite resource. Somebody has to lose their water.” 
</p>


                            </div>
                        </div> 
                        <div class="scrolldown"></div>
                    </div>

            <!-- video 3 -->
                    <div class="block">
                        <div class="videoTitle">
                            <img align="left" src="img/marker.png">Submerged
                        </div>
                        <div class="responsiveVid">
                           <iframe src="http://player.vimeo.com/video/69485217" width="500" height="375" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                        </div>
                    </div>
            <!-- text box 3 -->
                    <div class="block">
                        <div class="subtext">
                            <h4>Whether underwater or at war, situations can get out of control.</h4>
                            <h4>Once something ignites, it’s hard to predict how far it will spread.</h4>
                        </div>
                    </div>

            <!-- graphic 3 goes here -->
                    <div class="block">
                        <div class="videoTitle">
                            <img align="left" src="img/marker.png">A Population Boom
                        </div>
                        <div class="responsiveVid">
                            <iframe src="http://player.vimeo.com/video/69599544" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                        </div>
                    </div>


            <!-- graphic 4 goes here -->
                    <div class="block">
                        <div class="videoTitle">
                            <img align="left" src="img/marker.png">Harvesting the River
                        </div>
                        <div class="responsiveVid">
                            <iframe src="http://player.vimeo.com/video/69599329" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                        </div>
                    </div> 


            <!-- story 3 -->
                    <div class="block">
                        <div class="videoTitle">
                            <img align="left" src="img/marker.png">Addicted
                            <div class="subtitle">Giving Up Water Is Hard</div>
                        </div>
                        <div class="storyBox">
                            <div class="scrolldown"></div>
                            <div class="storyContent">
                                    <p class="quotation">“Whenever they attempted to overcome that condition, they gave a new shape to the environment, creating artificial rivers with dams, aqueducts, and the like. But it was not simply a one-way process of humans recreating nature. Society, even in its so-called triumphs, inescapably came to bear the mark of the desert and of its own effort to overcome the environmental exigencies there.” 
                                    <br><p>- Donald Worster, <em>Rivers of Empire</em></p>
                                    <img src="img/ADDICTED_images/addictedCrest.jpg"/>
                                    <p class="imageCaption">Crest of Hoover Dam. <span class="imageSource">Courtesy United States Bureau of Reclamation</span>.</p>
                                    <p>
                When the United States Bureau of Reclamation began its dam building adventure a century ago to trigger a desert empire, no one foresaw just how successfully cities would flourish.
            </p>
            <p>
                But dams don’t last forever — and the engineers who built them knew that. 
            </p>
            <p>
                Fifty years ago, USBR commissioner Floyd Dominy revealed how issues with aging dams would be solved: “We will let people in the future worry about it.”
            </p>
            <p>
                That sentiment should be a wakeup call to people today, says James Powell, author of <em>Dead Pool</em>. Dams have <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.britannica.com/EBchecked/topic/126494/Colorado-River">a lifespan of about 50 years.</a>
            </p>
            <p>
                “The people of the future? Well, that’s us.”
            </p>
            <p>
                Knowingly or not, Colorado water users have built themselves into a corner by making dams and their benefits the cornerstones of their lifestyles. As dams have aged and dependence on them has grown, the Colorado’s water supply has dropped — in part because of dams.
            </p>
            <p>
                In the face of dam expiration, water managers throughout the Southwest realize the necessity of curbing water use and augmenting supply. Some managers have tapped water from outside the Colorado River basin, and most champion conservation and policies restricting water usage. And restriction is key: Many Westerners haven’t changed their lifestyles despite conspicuous predictions of less and less water.
            </p>
            <p>
<span class="pullQuote">“We are stuck with the historical consequences of our own actions, our hope for a better life, and our delusional belief that natural resources are inexhaustible.”</span>
            </p>
            <p>
            No one event precipitated the difficult position the American West finds itself in, scientists and historians say. The Colorado River Basin’s crisis is the result of a synthesis of flaws.
            </p>
            <p>
            “We are stuck with the historical consequences of our own actions, our hope for a better life, and our delusional belief that natural resources are inexhaustible,” says <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://lib.colostate.edu/archives/findingaids/water/wdtp.html">Daniel Tyler</a>, emeritus professor of history at Colorado State University. 
            </p>
<p>
But problems extend far beyond basin states’ boundaries. The key to fixing them lies with getting average citizens to recognize that their actions, and the cultures in which they live, directly affect the shape of the river today and their continued ability to use it.
</p>
<p>
“Armageddon is now upon us,” Tyler says. “Our behaviors will have to change all over the country if we are going to see our way of life continue.” 
</p>
<p>
<h4> Bubbling Over </h4>
</p>
<p>
Westerners hear about and see the Colorado’s crisis, but observers say that the severity of the issues hasn’t hit hard enough yet to make them change their ways. 
</p>
<p>
When Lee Gaglione and his wife, Sally, moved to Grand Junction, Colo., from Cleveland, Ohio, 15 years ago, the view from the airplane shocked him. The contrast between irrigated and non-irrigated land was startling.
</p>
<p>
“On one side [of the river, you] see these lush fields and houses with grass, and the other side is completely without vegetation except for the natural sagebrush,” he says. “It’s like a moonscape. If you go 20 feet from the river on either side, it is as dry as a bone.” 
</p>
<p>
Grand Junction, a mild-weather home to 60,000 Coloradans, is blessed with water. Living at the confluence of the Colorado and the Gunnison rivers, Grand Junction’s residents often have to venture beyond city limits for signs of the simmering water crisis. 
</p>
<p>
<span class="pullQuote">"It's like seeing a tree that's not getting enough water. It's struggling, and its leaves are turning color."</span>
</p>
<p>          
“Here where I live, they’ve always had lots of water for irrigation,” says Gaglione, a dentist. The rivers replenish themselves with winter snow trickling down from the mountains. 
</p>
<p>
But “snowpack” has been low these last few years. Blue Mesa Reservoir on the Gunnison River, for example, looked like a little pond last year, he says. By the end of 2011 to the end of 2012, the reservoir’s level was  <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.usbr.gov/uc/crsp/download/acre-feet-1372378723209.lst">reduced by a third</a> .
</p>
<p>
When Gaglione, a fisherman, sees the Colorado River while commuting to work, he says he can’t help but worry about the fish.
</p>
<p>
“It bothers me. I think about the river as a living ecosystem,” he says. “It’s like seeing a tree that’s not getting enough water. It’s struggling, and its leaves are turning color.”
</p>
<p>        
Water engineers let only enough water out of upstream dams to keep the fish like trout, bass and catfish alive, Gaglione says. Lower water levels have also made boating difficult. 
</p>
<p>
“I’ve (fished) at times when there’s been twice as much water as this, and it was still a big challenge,” Gaglione says.
 </p>
<p>
Even though rising prices, fishing conditions and public media coverage remind people that they do in fact live in a desert, there’s still water in the river. The water crisis doesn’t seem to have affected the culture of Grand Junction, he says. 
</p>
<p>
“They’ve always mined it, and it’s always gotten kind of abused,” Gaglione says. “So I’m not sure you’re going to hear a lot of conservation-type discussions here. People worry about the river, but I don’t think they think about it too much,” he adds. “But we can’t go on like this forever.”
</p>
<p>
<h4> Staking their Claim </h4>
</p>
<p>
One hundred miles northeast of Grand Junction lies Carbondale, a ski town on the Roaring Fork River. A tributary of the Colorado, the Roaring Fork is one of the only undammed rivers in North America. It weaves between snow-loving resort towns like Aspen and Snowmass, supporting a vibrant sports culture. It also pours into and out of neighboring farms and ranch communities, including one in which Gaglione owns a small vacation home. 
</p>
<p>
A few years ago, the ranch’s water manager told homeowners that they were using only 70 percent of the water they had rights to. The ranch takes river water for ponds, streams and homes, but waterways weren’t big enough to handle all the homeowners’ full share each year.
</p>
<p> 
<span class="pullQuote">“If I don’t use it, it just flows by and the guy below me gets it... so I just figure I’ll take my share of it and use it.”</span>
</p>
<p>       
In states that recognize prior appropriation doctrine — the idea of “first in time, first in right” — a few <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.nwccog.org/docs/water_law_101.pdf">factors determine water rights</a>. Each right can be bought and sold and is defined by the first date the owner used water from a river or stream, the reason for that use and how much water is appropriate or required for that use. At the ranch, it appeared homeowners didn’t need all the water they had rights to.          
</p>
<p>
“The water owner told us, you better take 100 percent because if the downstream users request more water and start taking it, then they can limit future use of your own rights, which I thought was crazy,” Gaglione says. “So we did it as a group. We raised a bunch of money and increased our water intake, our streams got a little bit bigger, so now we can take 100 percent of what we’re allowed to so no one else can get it.” 
</p>
<p>
Fear that someone else might take their water has become a hallmark of life with prior appropriation and sometimes a hindrance to sustainable use of the Colorado. If someone has shares of water, Gaglione says, they take it while they can — contributing to what he calls an “attitude of selfishness.” 
</p>
<p>
In fact, he says, knowing water is from the Colorado makes him likely to use it. 
</p>
<p>
“If I don’t use it, it just flows by and the guy below me gets it,” he says. “So I just figure I’ll take my share of it and use it.”
</p>
<p>
But prior appropriation isn’t the sole legal hurdle in making sure water is used only when it’s needed. The Law of the River has challenged water managers to find creative means of ensuring that their populations receive their “right” — and then some. 
</p>
<p>
<span class="pullQuote">"There is more water appropriated on the Colorado than the Colorado can reliably produce."</span>
   </p>
<p>                   
“Just the fact that our very stretched system continues to operate successfully is testimony to a lot of very conscientious, good people trying to make things work,” says <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.williamdebuys.com/">William DeBuys</a>, author of <em>A Great Aridness</em>.
</p>
<p>
Water managers have been able to stave off colossal issues with the Law of the River in part because appropriation doesn’t mean use. 
</p>
<p>
“There is more water appropriated on the Colorado than the Colorado can reliably produce,” says Doug Bennett of Southern Nevada Water Authority. “The reason it doesn't just completely dry up and not make its way to the border [of Mexico] is because not everybody is using all the water they're entitled to.” 
</p>
<p>
This surplus is critical for California, which has depended <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.usbr.gov/lc/region/g4000/surplus/surplus_rod_final.pdf">until recently</a> on taking almost 20 percent more than its share to survive. Much of that so-called “surplus” existed because states didn’t have ways <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.google.com/url?q=http%3A%2F%2Fdinewaterrights.org%2Fsharing-colorado-river-water-history-public-policy-and-the-colorado-river-compact%2F&sa=D&sntz=1&usg=AFQjCNHQo03kCq1d1bX9I9kRIsqEKNkyVg">to bring in water</a>. There has never been a shortage, but that doesn’t mean individual states don’t feel their waistbands tightening — especially Nevada.
</p>
<p>
When Congress divided water among the Lower Basin states <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.usbr.gov/lc/region/g1000/pdfiles/bcpact.pdf">in 1928</a>, it did so with population in mind. All of Nevada received only 2 percent of the river’s annual flow, enough to support projected growth for the state’s then-population of <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.census.gov/dmd/www/resapport/states/nevada.pdf">about 90,000</a>. 
</p>
<p>
“When the state’s allocation was assigned, Nevada’s negotiators viewed 300,000 acre-feet as more than reasonable for sparsely populated Southern Nevada,” says Colleen Dwyer of the <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.usbr.gov/lc/region/g4000/">Boulder Canyon Operations Office</a>, the USBR office responsible for the Lower Basin. Negotiators focused on hydroelectricity instead, she says, securing a third of all electricity produced by the Hoover Dam. 
</p>
<p>
Today, Las Vegas alone has a population of about 600,000. The city serves an additional <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.lvcva.com/stats-and-facts/">40 million tourists</a> annually, all looking to relax in fountain-laden hotel plazas and putt through Las Vegas’ 61 desert <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.fastcompany.com/1749643/big-thirst-nothing%E2%80%99s-quite-so-thirsty-las-vegas-golf-course">golf courses</a>. 
</p>
<p>
The next smallest “loser,” New Mexico, <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://web.mit.edu/12.000/www/m2012/finalwebsite/images/col3.jpg">gets two-and-a-half times as much water for a population three-quarters the size</a> of Nevada’s today.
</p>
<p>
Situated at the crux of three deserts, Las Vegas receives only a few inches of rain each year; if not for resourceful water management, the city would be in a bind. To meet demand, water managers look for ways to make their relatively small amount of river water go further. Southern Nevada decreased its use by more than 100,000 acre-feet between 2002 and 2011, while its population grew by more than 400,000. 
</p>
<p>
An issue of semantics means Nevada is able to take 1.7 times its share of water each year through creative accounting. The Colorado River Compact deals only with consumptive use, or water that doesn’t have to be returned to the river as with agriculture; 40 percent of Nevada water use is non-consumptive and ends up back in the river via the sewer system. By cleaning water that goes through the sewer system and returning it to the river, Nevada can “debit” and “credit” water throughout the year. 
</p>
<p>
Additionally, Nevada tries to pad its bank account. When requesting water each year, Nevada tells the government it will need more water than it actually will, giving itself a somewhat-imaginary buffer. This tactic ensures the USBR will set aside water in case of emergency because that amount is built into the budget.
</p>
<p>
Even if a state doesn’t need all of its water, Bennett says, it might still request it to head off future problems. 
</p>
<p>
“In some cases, we're calling for it and then we end up banking it, too,” he says. “We may <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.lasvegassun.com/news/2001/jun/11/nevada-to-store-water-in-arizona/">bank it with another entity</a> or we may store it in an aquifer here. It still has to be delivered but we don't use it. We hang onto it for future use.”
</p>
<p>
But stockpiling loopholes like interstate banking won’t always be around. Eventually, the states will each be able to take as much water as they are allotted, and each will have to recognize that even this much is more than the river can handle. 
</p>
<p>
<span class="pullQuote">“The question is, will we find out of our own volition in advance, or will it have to be kind of a Pearl Harbor out there in the Southwest before we come to our senses?”</span>
</p>
<p>  
“The Colorado River was built wrong. And instead of fixing the river they want to desalinate and bring river water from other places, and if they do, that means they’ll still never fix the river, they’ll never solve the problem,” says John Weisheit, a conservationist with non-profit Living Rivers. “All they’re doing is just transferring it to some other generation to deal with.”
</p>
<p>
<a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.usbr.gov/newsroom/newsrelease/detail.cfm?RecordID=24761">Steve Hvinden</a> of the USBR says the Lower Basin states began taking their full shares in the 1990s, putting pressure on the Upper Basin, and the trend isn’t likely to reverse. Still, changing the Law of the River outside of recent <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.usbr.gov/lc/region/programs/strategies.html">shortage operation plans</a> is out of the question for most policy makers. 
</p>
<p>
“My general impression is that the people managing the river, all these water agencies are still hoping somehow this is going to work out, somehow they won’t have to tamper with the Law of the River,” author Powell says. 
</p>
<p>
“There may be enough water in the Southwest, if you distributed it on the basis of science and engineering and insisted on say extreme conservation. I suspect there might be,” he adds. “The question is, will we find out of our own volition in advance, or will it have to be kind of a Pearl Harbor out there in the Southwest before we come to our senses?”
</p>
<p>
Utah water engineer Robert King says gutting the Law of the River would do more harm than good. Too many other negotiations are based on it, and litigation won’t likely create immediate solutions. 
</p>
<p>
“That ignores the reality of 100-plus years of development and planning and use by 30-plus million people that depend upon the current operations of the Colorado River and the current interpretations of it,” he says.
</p>
<p>
Bennett agrees. In fact, he says, he’s seen a shift in water-selfish Western culture over the past 20 years that makes the Law work better: collaboration. 
</p>
<p>
Before the drought, Bennett says, he saw basin states as “neighbors that shared a resource but didn't have a lot of reason to interact with each other.” But with a new reality sinking in, he sees water banks and interstate storage projects as signs that states are willing to support one another. 
</p>
<p>
“Basically when you bank it, you're telling California that you'll loan them water and that they will pay it back in the future,” he says, meaning that Nevada can trust other states to use its water wisely and make good on promises. “We find it's much better to work with your neighbors than to argue with them.”
</p>
<p>
In spite of collaboration, some variables affecting Westerners’ water supplies exist outside of their control — sometimes because of past generations’ actions. 
</p>
<p>
<h4> Depleting Supplies </h4>
</p>
<p>
No matter how the laws are set, no matter how much water people use, 21st century Westerners will not have as much water going forward as they do today. Dams and canals are inherently flawed; plus, regardless of future technologies humans create, a growing body of science argues that climate change will also cause water stockpiles to evaporate faster.
</p>
<p>
Beginning with the Hoover Dam, engineers proved that big dams would nourish big cities. “Once [dams] happened, you had electricity, and you had a permanent supply of water,” author Powell notes. “And you had flood control, and you had an otherwise very nice climate, and then you had a nation populated from East to West. There was an inevitability about it.” 
</p>
<img src="img/ADDICTED_images/addictedBath.jpg" /> 
<p class="imageCaption">Draining Lake Mead. <span class="imageSource">Courtesy Alicia Pimental</span>.</p>
<p>
So engineers built lots of dams, but the river can only handle so many. Powell says that 40 million acre-feet is the maximum amount of water that can be held in all Colorado dams while keeping the river sustainable, but Lake Mead is able to hold 28.5 million acre-feet all by itself. 
</p>
<p>
Pressure from increasing populations meant that Lake Mead, which took almost seven years to fill while supporting a much smaller population, was already depleted by half in 2007. It will never regain max capacity, which would require storing two years of river flow.
</p>
<p>
Dams aren’t able to function forever, and early dam boosters knew it. One reason, experts say, is dirt. 
</p>
<p>
<span class="pullQuote">No matter how the laws are set, no matter how much water people use, 21st century Westerners will not have as much water going forward as they do today. </span>
  </p>
<p>          
The Colorado is an especially muddy river that flushes dirt and minerals through the basin, making farmland along its banks nutrient-rich. Dams hinder that process, inadvertently caching silt in their floors and further disrupting rivers’ natural processes. The Hoover Dam has <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.usbr.gov/pmts/sediment/projects/ReservoirSurveys/Reports/2001 Lake Mead Sedimentation Survey.pdf">lost 2.4 million acre-feet of storage space to silt</a> buildup since 1935. Silt buildup has slowed in Lake Mead recently because Lake Powell, upstream of Lake Mead at Glen Canyon Dam, has captured 95 percent of the silt that would have gone to Lake Mead since 1963. 
</p>
<p>
Reservoirs filling with silt place pressure on dams and also limit their ability to produce hydroelectricity. The more silt, the more likely pipes leading to turbines will be blocked. Las Vegas, as it happens, gets 90 percent of its power from the Hoover Dam. According to a 2008 study, there is a 15 percent chance that Lake Mead wouldn’t have enough water to produce any power by 2017. 
</p>
<p>
“If Glen Canyon were to fill with sediment,” Powell says, “it would be in effect as though it were not there at all. That is, the water would just come flowing over the top (of the dam). It would generate no hydropower, of course, and it would be back on to its natural schedule.” 
</p>
<p>
Even for a rich country like the United States, moving this buildup elsewhere would be <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://ovnblog.com/?p=4841">“prohibitively expensive,”</a> Powell says, and would burden someone else with toxic sediment.
</p>
<p>
And if ever there were a flood, the combined pressures of silt and lack of space might bring down an entire high-hazard dam. 
</p>
<p>
Dwyer of the Boulder Canyon Operations Office says the country’s 84,000 dams have an average age of 52. Only one USBR-built dam has failed, but the damage from that single event was immense in lives lost. The USBR spends between $75 million and $85 million repairing its 474 dams and dikes each year.  
</p>
<p>
The danger of dams to populations dependent on water is compounded by the fact that their shape contributes to water loss through evaporation. Because dams expose a significant amount of water through surface area, the Hoover Dam alone loses 800,000 acre-feet of water annually — almost three times Nevada’s annual share. 
</p>
<p>
This evaporation and a host of other worries will only be aggravated by <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.climatecentral.org/news/8-images-to-understand-the-drought-in-the-southwest-16149">climate change</a>.
</p>
<img src="img/ADDICTED_images/addictedAerial.jpg" /> 
<p class="imageCaption">Hoover Dam from Above. <span class="imageSource">Courtesy Library of Congress</span>.</p>
<p>
“Certainly up until two to three years ago, the Bureau of Reclamation was in complete denial about the science of global warming, in denial about anything that would compromise their ability to keep the river more or less the way it is today,” says Powell, who has <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.slate.com/blogs/bad_astronomy/2012/12/11/climate_change_denial_why_don_t_they_publish_scientific_papers.html">spent the last few years studying climate change</a> and the politics around it. As with Major John Wesley Powell before him, James Powell — no relation to the river explorer — sees opposition based not on fact but on sentiment. 
</p>
<p>
The USBR had been using streamflow records from the past century to schedule water releases and forecast future flow, but recently began using more modern and broadly derived data, showing a willingness to accept new information, Powell says. Crucial data have come from dendrochronological records — that is, tree ring studies reflecting water resources over a span of 500 years. These studies showed that the two decades used to determine average annual streamflow found in the Colorado River Compact really were the wettest decades in half a millennium. 
</p>
<p>
Since then, the USBR’s forecasts have been grimmer. This past year, it projected that there will be a 3.2 million acre-foot imbalance between water demand and supply in the basin as a result of climate change 50 years from now.
</p>
<p>
“We have reached an era of limits,” says Steve Hvinden of the Boulder Canyon Operations Office. 
</p>
<p>
Of climate change’s many aspects, global warming is one of the most comprehensively damaging. Western temperatures are <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.sfgate.com/news/us/article/How-hot-is-it-in-the-western-US-Real-hot-4630979.php">reaching record highs</a>, making it even harder to keep water in the basins. 
</p>
<p>
Utility companies recognize the seriousness of climate change, but some can't wait for cultural shifts to ensure they will have access to water. In 2009, the Southern Nevada Water Authority began digging a three-mile tunnel beneath Lake Mead <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.reviewjournal.com/news/water-authority-digs-deep-third-intake-pipe-lake-mead">to create an intake</a> in the bottom of the reservoir. The company already has two intakes at higher elevations but recognized that water might not reach those points soon.
</p>
<p>
Bennett says he has mixed feelings about the project.
</p>
<p>
“But you can't afford not to have it, because if we lose our upper intake, our second intake will not be able to produce enough water for Las Vegas,” he says. 
</p>
<p>
“People wouldn’t (build that intake) if they didn’t think that was necessary,” Weisheit says. “It tells us, No. 1, that water managers admit that the reservoirs can come to this situation — which means we have empty reservoirs, which means we have no reserve — and that’s what reservoirs are for.” 
</p>
<p>
<h4> Uprooting Lifestyles </h4>
</p>
<p>
No matter how the waters of the Colorado are allocated, a bigger issue will be changing how and where that water is used. Entire economies have grown up around dam technology and in the Southwest would not exist without them. 
</p>
<p>
The dams themselves have even become an economy. The Colorado River Basin’s controlled flows, reservoirs and canyons support a $26 billion recreation industry. Plus, dams make drinking water, hydroelectricity and food possible.
</p>
<p>
The Colorado River irrigates 15 percent of the country’s farmland, and agriculture draws an overwhelming 78 percent of all river water. Irrigated agriculture in the Imperial Valley alone drinks 3 million acre-feet of water every year – in some part to the benefit of the whole country. Southern California and Arizona supply the nation’s winter vegetables.
</p>
<img src="img/ADDICTED_images/addictedLettuce.jpg" /> 
<p class="imageCaption">Harvesting Lettuce in the Imperial Valley, Calif. <span class="imageSource">Courtesy Jonathan Waterman</span>.</p>
<p>
“Were we to limit agriculture just to the more humid areas of the country, the West would have an excess of water. But we love our agriculture here,” professor Tyler says. 
</p>
<p>
 Most of the crops grown aren’t the kinds people want to eat. Rather, they are grown to  <em>feed </em> what people like to eat, such as cows and pigs. And crops, namely pasture grass, alfalfa and hay, are some of the most water-intensive crops in the country. Kuhn of the Colorado River Water Authority says 90 percent of all crops grown in the West are feed crops, making the cattle they nourish the <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://yaleglobal.yale.edu/sites/default/files/images/2013/02/WaterBIG.jpg"> least water efficient product on the market</a>.  
</p>
<p>
Getting farmers to grow crops more immediately useful and more efficient in desert and drought environments - or more in tune with the region’s increasingly earlier spring water cycle – is necessary but wont be easy, Kuhn says. It will take a market intervention to make the region grow more sustainable crops in the long term that can withstand the kinds of drought Westerners now face.
</p>
<p>
As India, China and other markets grow increasingly able to buy pricier protein, Kuhn says, farmers realize they can make more money growing water-intensive feed crops. And the beef farmers, he says, are king. There are <a href="http://www.agcensus.usda.gov/Publications/2007/Online_Highlights/Fact_Sheets/Geographic/watersheds.pdf"> 2 million head</a> of cattle in the Colorado River Basin, and <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.bloomberg.com/news/2013-06-25/cattle-advance-to-seven-week-high-on-u-s-beef-demand.html">their value is only growing</a>. 
</p>
<p>
Policies help farmers use water more conservatively, but farm lobbies pushing for certain crops are tough to break. Legislators looking for re-election don’t make changes that negatively affect their economies, and Congress has a history of <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.gao.gov/archive/1996/rc96109.pdf">giving farm subsidies even when farmers can’t always pay them back</a>. 
</p>
<p>
<span class="pullQuote">“Were we to limit agriculture just to the more humid areas of the country, the West would have an excess of water. But we love our agriculture here.”</span>
  </p>
<p>          
Still, author William DeBuys says, the lobbies aren’t impossible to break — though that might not produce great results all around.  
</p>
<p>
“Water runs uphill to money, so with enough money, you can get people to stop farming and let you have their water,” he says. “As those agricultural waters are reallocated, you can be sure the property owners will be compensated for the ‘loss of their water.’ But what happens to the rest of the agricultural sector? The workers in the field? The truckers who haul the produce from field to market? The whole social ecosystem of agricultural will shrink with very difficult consequences.” 
</p>
<p>
But if people don’t respect the water and what it can support, conservationists like Weisheit say, the economy will crash.
</p>
<p>
“You can’t make money without water, and if you’re not going to take care of the water, then you’re not going to be able to make money,” he says.
</p>
<p>
Even harder than persuading people to make lifestyle changes, some say, is persuading them to change where they make those choices. Fewer people using Colorado water would lessen pressure on a dwindling supply.
</p>
<p>
 “You can’t go to 40 million people and say, “I’m sorry, we built it wrong and we have to start over,’” he says. “Their hands are tied. And so that means the system is going to fail. It’s guaranteed.” 
</p>
<p>
It’s even harder to actually tell people to move — or not to come.
</p>
<p>
Getting people to move would first take a USBR admission that its systems can’t support the population, which Weisheit says won’t happen. 
</p>
<p>
“All they need to say is, the mission of developing the West has been accomplished, thank you very much. We’re at the limit of our resources, we can’t accept any more, and in fact we’re in trouble and we actually have to turn this around ourselves so we can live here, too,” Weisheit says. “But they can’t do that.”
</p>
<p>
<h4> Conserving for the Future </h4>
</p>
<img src="img/ADDICTED_images/addictedLawn.jpg" /> 
<p class="imageCaption">A Sustainable Las Vegas Lawn. <span class="imageSource">Courtesy Southern Nevada Water Authority</span>.</p>
<p>
As opposed to limiting populations, says <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.denverwater.org/AboutUs/BoardAndOrganization/Manager/JimLochhead/">Jim Lochhead</a> of Denver Water, water managers are attempting to limit how people live <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.denverwater.org/Drought/DroughtRules/">through water use policies</a>. People respond best to changes in cost, he contends.
</p>
<p>
To better enforce conservation, Denver has created a “Use Only What You Need’” billboard campaign, hired a “running toilet” mascot that shows up at athletic events and festivals, and even created a patrol that calls out big water users and meets with them to talk about conservation in the hopes of changing their behavior.
</p>
<p>
“We use GIS tools so we can literally look at a neighborhood and see who is the high water user,” Lochhead says, noting that the patrol has already met with 4,000 individual customers. 
</p>
<p>
<a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.snwa.com/consv/conservation.html">Even in Las Vegas</a>, it’s not the golf courses or the casinos that place the greatest pressure on resources, Southern Nevada’s Bennett says. The city has begun <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.snwa.com/rebates/wsl.html">paying people to replace their grass</a> lawns with water-resistant stones and shrubs. 
</p>
<p>
“When I first got here, one worry I heard was that people didn’t want to get rid of their lawn because they were worried about what their neighbors would think,” he says. “They were afraid to break the ice, but the ice is definitely broken.”
</p>
<p>
Bennett says that 50,000 properties, or 10 to 15 percent of properties in Las Vegas, have converted their lawns.
</p>
<p>
Some people, however, aren’t enamored of current conservation policies. Much of the water conserved by taking shorter showers or watering less grass is not technically conserved, Weisheit says.
</p>
<p>
“When you save water, you’re actually building another house and another field because water managers will take the water that you save and put that water to use,” he says. “Until those water laws change and water that is conserved is actually changed, your best bet is to use as much water as you possibly can, because that water is going to go through the sewer system and back into the reservoir.”
</p>
<p>
“If you want to save the river,” Weisheit adds somewhat facetiously, “flush your toilet twice.”  
</p>
<p>
    But the real question: With overwhelming scientific support for the fact that the water crisis is real, why is it so hard to get Westerners to buy into conservation? 
</p>
<p>
<span class="pullQuote">“If you want to save the river, flush your toilet twice.”</span>
</p>
<p>
When a problem’s impact is out of sight — like dwindling reservoirs — it’s easier for people to put issues out of mind, experts add. Kuhn notes that a fundamental symptom of this mindset is people not understanding where water comes from.
</p>
<p>
“Most people still think, where does the water come from? It comes from the tap,” Kuhn says. “Okay, well how did it get to the tap? And then they get confused.”
</p>
<p>
Before Gaglione of Grand Junction moved out West from Cleveland, he had no idea that water was an even an issue there, he says. 
</p>
<p>
“In Cleveland, it didn’t matter to us if it didn’t rain a lot or did rain a lot. It wasn’t part of our lives. But here in the West, it’s a big part of everyday life. It takes awhile to figure out that we’re all tied to these natural conditions and don’t necessarily realize it,” he says. 
</p>
<p>
Even now, he hears about people conserving water elsewhere but doesn’t feel much pressure to do it himself. 
</p>
<p>
“We haven’t had any of the restrictions like they have in Denver, where they have only certain days where you can wash your car or water your yard,” he says. “I think they figure that if we have irrigation from the Colorado River, you have a share of water, you just use as much as you can of your share. And if you’re using municipal water, the cost will probably limit your washing your car or watering your grass.” 
</p>
<p>
Water officials in Utah recently started <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.utahswater.org/">a public discussion series</a> to engage consumers, engineer King says. If people face the costs of living in a desert, they might feel more responsible for conservation.
</p>
<p>
<span class="pullQuote">“You can't have a lush, green English-type landscape in the middle of a desert. Well, I guess you can if you're willing to pay for it.”</span>
</p>
<p>
“You can't have a lush, green English-type landscape in the middle of a desert,” he adds. “Well, I guess you can if you're willing to pay for it.”
</p>
<p>
It took Las Vegans seeing their water source dry up before their eyes, Bennett says, for the city to have a change of heart. 
</p>
<p>
“In 2002 when everyone collectively watched the lake drop 100 feet and it was very visible, everybody realized that yes, something was going on with our water,” he says. “In one year, the community cut 50,000 acre feet off their water demand.”
</p>
<p>
Despite all the messages saying the crisis is already here, Gaglione has faith that a solution will appear.
</p>
<p>
“I have a great faith in ingenuity,” Gaglione says. “I think we’ll figure this out. They’ll find a way to sustain the life here with less water if that’s what it takes. Maybe the people downstream will conserve more water and won’t waste it and something else will come along.” 
</p>
<p>
But it’s not just ‘the people downstream’ who are responsible, author DeBuys says. 
</p>
<p>
“It’s everyone,” he says. “We’re all culpable.” 
</p>      
                            </div>
                        </div>
                        <div class="scrolldown"></div>
                    </div>


             <!-- video 4 -->
                    <div class="block">
                        <div class="videoTitle">
                            <img align="left" src="img/marker.png">Vantage Point
                        </div>
                        <div class="responsiveVid">
                           <iframe src="http://player.vimeo.com/video/69485310" width="500" height="375" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                        </div>
                    </div>

            <!-- text box 4 -->
                    <div class="block">
                        <div class="subtext">
                            <h4>Trying a new course means accepting the unknown.</h4>
                            <h4>But, sometimes you can no longer ignore the warning signs.</h4>
                        </div>
                    </div>

            <!-- graphic 5 goes here -->
                    <div class="block">
                        <div class="videoTitle">
                            <img align="left" src="img/marker.png">Changing Shape
                        </div>
                        <div class="responsiveVid">
                            <iframe src="http://player.vimeo.com/video/69592031" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                        </div>
                    </div>


            <!-- graphic 6 goes here -->
                    <div class="block">
                        <div class="videoTitle">
                            <img align="left" src="img/marker.png">The Last Straw
                        </div>
                        <div class="responsiveVid">
                            <iframe src="http://player.vimeo.com/video/69591482" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                        </div>
                    </div>

            <!-- story 4 -->
            <!-- <img src="img/DAMAGES_images/damages1.jpg"/> -->
                    <div class="block">
                        <div class="videoTitle">
                            <img align="left" src="img/marker.png">Sea Change
                            <div class="subtitle">What Happens When a River Stops Before the Ocean?</div>
                        </div>
                        <div class="storyBox">
                               <div class="scrolldown"></div>
                            <div class="storyContent">
                               <p>
                Tucked away in scrapbooks in northern Mexico, photographs from the 1930s show astonished men hugging fish as big as themselves. The fish, which can weigh more than 300 pounds, are called totoaba. They live exclusively in a 300-mile wide zone in the upper Gulf of California, in waters between the Baja Peninsula and mainland Mexico.
            </p> 
            <img src="img/DAMAGES_images/damages2.jpg" /> 
<p class="imageCaption">Left to right, Tony Reyes, Gorgonio Fernandez, and his son, Chi Chi Fernandez, with a totoaba catch, Baja California, Mexico, c. 1954. <span class="imageSource">Photo courtesy of The Unforgettable Sea of Cortez by Gene Kira</span>.</p>
            <p>
                The totoaba is an unusual fish. Its mouth is on the underside of its head, and its disproportionately small eyes give the fish the appearance of permanent dismay, as though you have just taken its glasses. A member of the drum family, it uses special muscles to strike an organ called a swim bladder, making a drumming sound. Most fish use swim bladders for buoyancy; this species of drum uses them as an instrument.
            </p>
            <p>
                Every spring for millions of years, the totoaba converged on the Colorado River delta. At that time of year, the river was laden with the minerals, silt and nutrients that ran off the watershed, an area about the size of France. By the time the river passed the delta to reach the Gulf of California, it had become a soup, its contents a critical part of countless food chains. There, the organic matter from the river nourished the young totoaba. The plume of sediment from the river protected them from predators that were not adapted for such darkness.
            </p>
            <p>
                <span class="pullQuote">“Fishermen fed their families on the money from the dried bladders rather than the meat of the giant fish itself.” </span>Throughout the 20th century, as U.S. politicians negotiated and signed agreements and laborers banked and diverted water upstream, the totoaba headed toward extinction. They continued to spawn in the delta, where fishermen easily hauled them <em>in flagrante</em> into their boats. Their swim bladders were (and still are) an ingredient in a Chinese soup called <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.biol.wwu.edu/trent/alles/TheDelta.pdf">Seen Kow</a>, considered a delicacy. Fishermen fed their families on the money from the dried bladders rather than the meat of the giant fish itself. 
            </p>
            <p>
                A market for the meat developed in the U.S., and sport fishermen started vacationing at the Gulf of California. <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.nmfs.noaa.gov/pr/species/fish/totoaba.htm">In 1942</a>, fishermen caught 2,000 metric tons of totoaba, in 1958, only 300 and by 1975, only 58 tons. After that, the Mexican government completely banned totoaba fishing.
            </p>
            <p>
                Feeding the U.S. market for fish and the Chinese market for delicacies helped decimate the population. The totoaba was caught in the crosshairs of overfishing and habitat destruction. Upstream diversions such as the Hoover Dam had disrupted the river’s pulse since the 1930s, and water consumption had kept the Colorado River from regularly reaching the sea since the 1960s, cutting off the ingredients so essential to the fish’s reproduction and growth. 
            </p>
             <img src="img/DAMAGES_images/damages1.jpg" /> 
<p class="imageCaption"><em>Totoaba macdonaldi</em>. <span class="imageSource">Image by Alex Kerstitch. Copyright <a href="http://biogeodb.stri.si.edu/sftep/taxon_mod_largepic.php?id=2386">Shorefishes of the tropical eastern Pacific</a> online information system, used with permission</span>.</p>
            <p>
                Today, totoaba are critically endangered. Their plight represents the far-reaching impact dams and other water diversions along the Colorado River have had on wildlife. For the totoaba, the obvious villains are poachers who ignore the totoaba’s endangered status and smuggle them into the U.S. where each bladder sells for hundreds of dollars. The less obvious culprit is the lack of freshwater.  But hope for the delta flickers in a recent agreement between the U.S. and Mexico to release more water downstream. To begin to understand why the Colorado no longer reaches the ocean requires a look upstream to Lake Mead, which as of this writing holds only half its capacity.
            </p>
            
            <h4> Ordering Water </h4>
            
            <p>
            <span class="pullQuote">“I feel like Superman.” </span> Bruce Williams thinks of the reservoir he manages as half-full. He is an optimist in the face of projected differences between the river’s <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.usbr.gov/lc/region/programs/crbstudy/finalreport/">supply and human water demands</a>. As the U.S. Bureau of Reclamation Manager of the River Operations Group at Hoover Dam, which retains the water of Lake Mead, he controls the water flow out of Hoover Dam to the Lower Basin states. Williams acknowledges that in some respects, he has the economy of the Southwest at his fingertips. “I feel like Superman,” he says of his position.
            </p>

             <img src="img/DAMAGES_images/damages3.jpg" /> 
<p class="imageCaption"> View of Black Canyon, Colorado River, Hoover Dam and Lake Mead. <span class="imageSource">Photo by Doc Searls, 2012</span>.</p>

            <p>
            Each year, the seven states of the Colorado River basin, as well as Native American nations and Mexico, are allocated a certain amount of water under the Law of the River, a bundle of laws, contracts, compacts and amendments that long ago estimated how much water ran through the river and now dictates how much of that water states can take. 
            </p>
            <p>
                Laws have been structured over the years so that certain users, such as the Imperial Valley in California, have rights to the water ahead of other users. Called “prior appropriation rights,” states upstream in the so-called Upper Basin can take their allotment but are beholden by the Law of the River to deliver the amount of water that downstream users have negotiated for themselves. 
            </p>
            <p>
                Williams and his colleagues who release the water think of themselves as water wholesalers; others call them water accountants. Either way, water is treated as a commodity, directed downstream from its reserves in Lake Mead. Williams notes that the Upper Basin has never failed to send water to the Lower Basin, despite a 14-year drought.
            </p>
            <p>
                When a user that has a contract, such as a city, places a water order, Williams documents the water’s release and subtracts that amount from that user’s allotment. That means double and triple checking a daily water log along with other tasks such as maintaining water gauges along the river. Williams also communicates with operators at a cascade of dams and diversions that stand in the way of that water order getting from Lake Mead to a sprinkler head above a field of carrots in the Imperial Valley, California.  
            </p>
            <p>
            Williams, who has spent 30 years with the USBR, says he feels like the river’s caretaker. He answers to the Secretary of the Interior following orders to make sure the Law of the River is obeyed and releases water to downstream users. But no one orders water so that the Colorado River can reach the sea. 
            </p>
            
            <h4> Life of the Delta </h4>
            
            
            <p>
            <span class="pullQuote">“Everybody has a water right but the Colorado River itself.” </span>
                “Everybody has a water right but the Colorado River itself, and that's ethically and fundamentally wrong,” says John Weisheit, passionate advocate and director for the non-profit Living Rivers.
            </p>
            <p>
            <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.nytimes.com/2012/02/15/opinion/where-the-colorado-river-runs-dry.html?_r=0">)ther prominent voices</a> in support of the river blame an accident of geography—the fact that the Colorado crosses into Mexico before hitting the Gulf of California—for the failure of the river to join its delta completely. 
            </p>
            <p>
                “Depletions have perhaps even more serious impacts on the river and its associated ecosystems as it travels its last few miles in Mexico,” writes Robert Adler in his book <em>Restoring Colorado River Ecosystem</em>. 
        </p>
        <p>
                <span class="pullQuote">“If the Colorado River delta were completely within the boundaries of the U.S., we would consider it a disgrace that the river didn’t reach the sea.” </span>“If the Colorado River delta were completely within the boundaries of the U.S., we would consider it a disgrace that the river didn’t reach the sea,” says Karl Flessa, director of the School of Earth and Environmental Science at the University of Arizona. Because the Colorado ends outside U.S. borders, “it almost doesn’t feel like one of their responsibilities.”  
            </p>
            <p>No ecological surveys were conducted of the river before the dams began going up in the early to mid-1900s, and Flessa jokes that with his research, he is trying to reconstruct how the Colorado looked in the pre-DAMbrian era. If the river were flowing normally, the delta beaches would be constantly remade – eroded by the sea and renewed by the sediment washed down from the upstream canyons. This same sediment would nourish species like the totoaba, and many others. 
            </p>
            <p>
                <span class="pullQuote">“When a troop of egrets settled on a far green willow, they look like a premature snowstorm.” </span>Through the voice of Aldo Leopold in <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://eebweb.arizona.edu/faculty/Bonine/Leopold1949_GreenLagoons-150-158.pdf"><em>The Green Lagoons</em></a>, author Adler depicts how Leopold described a “verdant wall of mesquite and willow [that] separated the channel from the thorny desert beyond,” saying “when a troop of egrets settled on a far green willow, they look like a premature snowstorm.”
            </p>
            <p>
                At 2 million acres, the once-immense delta was a wetland habitat the size of Delaware and Rhode Island combined, a crucial home for countless species of birds and other wildlife. The delta is now about 150,000 acres, 7.5 percent of what it used to be. 
            </p>
            <p>
                Flessa describes the section of delta that still exist as a “green oasis of willow and cottonwoods,” home to thousands of bird species. No longer bordered by the desert, the oasis is instead surrounded by its agricultural successors: fields of alfalfa, wheat or onion—economic endeavors irrigated 100 percent by river water.
            </p>
            <p>
                Today, the delta beaches are almost exclusively made of masses of clam shells that attest to the fertility of the delta when the Colorado reached the gulf. 
Now that the sediment is trapped behind the dams, the tides have washed the clams out of the sediment and accumulated them on the beach. “They crunch when you walk on them,” Flessa says. 
            </p>
            <p>
                The decline of the totoaba is less visible. Ecologist Kirsten Rowell has other means of determining the extent of the damage to the fish since the nutrient-rich river silt has been blocked from the delta. She uses otoliths, the ear bones of fish, to quantify what the Colorado River meant for the totoaba. A fish’s otolith looks like an iridescent, ridged contact lens. Concentric rings, like tree rings, reveal a fish’s age and hint about elements of its life. Comparing the otoliths she found in Native American middens (trash piles) from 5,000 years ago, Rowell has shown that the ancient totoaba grew twice as fast and matured two times earlier in the estuary of the Colorado River when it reached the ocean. 
            </p>
            <p>
            <span class="pullQuote">“Because the river terminates in a foreign country...it is suffering a slow death.” </span>“If the final reaches of this 6-million-year-old delta were in the United States, they would have been declared a national park, with a protected free-flowing river,” wrote Jon Waterman in an <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href= "http://www.nytimes.com/2012/02/15/opinion/where-the-colorado-river-runs-dry.html?_r=1&">op-ed in The New York Times</a> in 2012. “But because the river terminates in a foreign country, beyond the reach of the Endangered Species Act and most tourists’ cameras, it is suffering a slow death.” 
            </p>
            
             <h4> Minute 319 </h4>
            
            <p>
                While many have written about the dire situation in the delta, hope in forestalling its death lies in recent negotiations between the U.S. and Mexico on the Law of the River. 
            </p>
            <p>
                In December 2012, representatives from the U.S. and Mexico met in a hotel ballroom in San Diego to discuss and sign the most far-sighted amendments to the Law of the River seen yet. It had taken years to get there. 
            </p>
            <p>
                Amendments to the Law of the River are called Minutes. Minute 319 is an agreement between Mexico and the U.S. over water that ignores their borders and contains several revolutionary points. First, owing to an earthquake that destroyed much of its infrastructure in 2010, Mexico will now store its 1.5 million acre-feet allocation in Lake Mead. Storing the water can help offset a water shortage declaration. As of this writing, the <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="http://www.usbr.gov/lc/region/g4000/hourly/rivops.html">current lake level in Lake Mead</a> was 47 percent of capacity and 31 feet away from a shortage being declared. Storing Mexico’s water allotment will raise the water level by <a target="_blank" onclick="cancelFullscreen('pageWrapper');" href="https://www.watereducation.org/userfiles/RiverReport_Winter13_web.pdf">15 feet</a>. 
            </p>
            <p>
            Second, Mexico and the U.S. have agreed to share in any future water shortages. This decision is significant; in the event of water scarcity, the U.S. would give up some of its water to provide sufficient water for Mexico. In return, Mexico would be willing to accept less water than promised. The agreement is groundbreaking because as opposed to the squabbling that characterized previous negotiations, Minute 319 emphasizes a sense of community around a single watershed.
            </p>
            <p>
                “This negotiated solution takes steps toward working that out with an incredible shift towards flexibility around that border. It is really ground breaking in that sense,” says Jennifer Pitt, who took part in the discussions on behalf of the Environmental Defense Fund, a large non-profit concerned with the delta. 
            </p>
            <p><span class="pullQuote">“Perhaps the most revolutionary provision within Minute 319 sets aside 105,392 acre-feet of water solely for the environment.</span>
                Perhaps the most revolutionary provision within Minute 319 sets aside 105,392 acre-feet of water solely for the environment, the first time an international treaty has set aside water for such benefit. 
            <p>
                In a one-time event, managers will release water to the river in 2014 to mimic a spring flood event. The release is expected to provide enough water for the Colorado River to flow over the delta, and for the first time in 15 years, water from the Colorado River will reach the Gulf of California.  Observers believe the release will benefit many species in unpredictable ways, and others hope that the local, Mexican economy will also flourish. Small businesses already established along the upper Gulf, fish camps and bird-watching tours are waiting.
            </p>
            <p>
                Minute 319 is set to expire in five years, but it is a tentative step towards recognizing the value of a river reaching the ocean. It represents the power of negotiation and trust, observers say. After water managers at Lake Mead fill the order for the pulse flow to create the spring flood, scientists will closely study the pulse’s effect on the species that inhabit stretches of the river and upper delta. While they will not focus on the oceanic species, what they learn above the delta is intrinsically linked to the ocean-going species, including the totoaba, in the Gulf of California. 
            </p>
 
            <img src="img/DAMAGES_images/damages4.jpg" /> 
<p class="imageCaption">The now-dry Colorado River delta branches into the Baja/Sonoran Desert five miles north of the Gulf of California, Mexico. <span class="imageSource">Photo by Pete McBride, U.S. Geological Survey, 2009</span>.</p>

            <p>Like water manager Bruce Williams, paleoecologist Karl Flessa is also an optimist. He estimates that with consistent freshwater from the Colorado flowing into the sea, in a couple of years the shrimp population could increase, and in five years, the numbers of catchable fish. 
            </p>
            <p>
            Flessa expresses hope that populations of endangered species like the totoaba would bounce back. “I think there’s potential for that,” he says. “A little bit of water can have an enormous environmental benefit, and that environmental benefit can get translated into economic opportunities for people. We can’t quite turn the clock back, but the system as a whole is remarkably resilient.” 
            </p>

                            </div>
                        </div> 
                        <div class="scrolldown"></div>
                    </div>

            <!-- video 5 -->
                    <div class="block">
                        <div class="videoTitle">
                            <img align="left" src="img/marker.png">An Altered Course
                        </div>
                        <div class="responsiveVid">
                            <iframe src="http://player.vimeo.com/video/69485381" width="500" height="375" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                        </div>
                    </div>

            <!-- conclusion text -->
                    <div class="block">
                        <div class="subtext toptext">
                            <h4>The Colorado is changed. Dividing its waters among ourselves gave us the audacity to think the river was contractually obliged to perpetually provide. Our temperamental decisions were driven by its seeming bounty. It is the river that launched a movement, baptized a nation's rapid growth just to collapse before achieving its delta. The river ultimately changes us by creating a venue, an experience, a recognition that our decisions walled us into a fate that is not permanent.</h4>
                        </div>
                    </div>

            </div>
        </div>


        <!-- to top -->

            <div id="toTop">
                <img src="img/totop.png">
            </div>

            <!--end-->

    </div>





<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>

<script src="js/jquery.tinyscrollbar.min.js"></script>
<script src="js/plugins.js"></script>
<script src="js/main.js"></script>

    </body>
</html>

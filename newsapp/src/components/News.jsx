
import React, { Component,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar';


export class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'general',

    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }

    articles = [
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "Pavelski lifts Stars over Golden Knights in OT to avoid sweep | CBC Sports",
            "description": "Joe Pavelski scored on a power play at 3:18 of overtime and the Dallas Stars avoided a sweep in the Western Conference final with a 3-2 victory over the visiting Vegas Golden Knights on Thursday night.",
            "url": "http://www.cbc.ca/sports/hockey/nhl/vegas-golden-knights-dallas-stars-game-4-recap-may-25-1.6855380",
            "urlToImage": "https://i.cbc.ca/1.6855410.1685071346!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/1493364976.jpg",
            "publishedAt": "2023-05-26T03:37:15.0498848Z",
            "content": "Joe Pavelski scored on a power play at 3:18 of overtime and the Dallas Stars avoided a sweep in the Western Conference final with a 3-2 victory over the visiting Vegas Golden Knights on Thursday nigh… [+3387 chars]"
        },
        {
            "source": {
                "id": "lequipe",
                "name": "L'equipe"
            },
            "author": "L'EQUIPE",
            "title": "Le flash sports du 26 mai",
            "description": "Retrouvez l'essentiel de l'actualité sportive avec notre flash sports quotidien.",
            "url": "https://www.lequipe.fr/Tous-sports/Actualites/Le-flash-sports-du-26-mai/1398653",
            "urlToImage": "https://medias.lequipe.fr/img-photo-jpg/le-flash-sports-l-equipe/1500000001789331/0:0,1997:1331-640-427-75/af1a0.jpg",
            "publishedAt": "2023-05-25T22:05:00+00:00",
            "content": "Les tirages au sort de Roland-Garros ont réservé de belles affiches. Les Metropolitans de Victor Wembanyama se sont qualifiés pour les demi-finales de Betclic Elite. Thibaut Pinot a terminé 2e de la … [+139 chars]"
        },
        {
            "source": {
                "id": "les-echos",
                "name": "Les Echos"
            },
            "author": "Bruno Trévidic",
            "title": "Le gouvernement veut taxer davantage le transport aérien pour financer la SNCF",
            "description": "Lors du congrès de la FNAM, le ministre délégué aux transports, Clément Beaune, a annoncé une « contribution » supplémentaire du transport aérien, qui devrait à aller à la rénovation du réseau SNCF.",
            "url": "https://www.lesechos.fr/industrie-services/tourisme-transport/le-gouvernement-veut-taxer-davantage-le-transport-aerien-pour-financer-la-sncf-1946700",
            "urlToImage": "https://media.lesechos.com/api/v1/images/view/646f939b00c6347916219dcb/1280x720/090261606908-web-tete.jpg",
            "publishedAt": "2023-05-25T16:57:57Z",
            "content": "Le transport aérien français a bon coeur. En plus de financer ses propres investissements et sa transition énergétique, il va devoir aider la SNCF à financer la remise en état de ses infrastructures.… [+483 chars]"
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": "Maurice Moton",
            "title": "8 NFL Players Primed for Major Bounce Back from Injury in 2023",
            "description": "We wish injuries didn't happen, but it's part of all sports. Every year, NFL players are robbed of momentum from previous productive years and the joy of…",
            "url": "https://bleacherreport.com/articles/10077101-8-nfl-players-primed-for-major-bounce-back-from-injury-in-2023",
            "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1684911314/q9ari7pjbgx0c27cons8.jpg",
            "publishedAt": "2023-05-25T11:00:00Z",
            "content": "Lamar JacksonAP Photo/John Raoux\r\nIn 2022, Lamar Jackson missed the last five games of the regular season and the Baltimore Ravens' wild-card playoff matchup with the Cincinnati Bengals because of a … [+1398 chars]"
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": null,
            "title": "☄️ Knicks Playoff Special ",
            "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
            "url": "https://bleacherreport.com/videos/431020-knicks-start-playoff-run--hero-ball",
            "urlToImage": null,
            "publishedAt": "2023-04-17T21:22:15.1716203Z",
            "content": "Knicks Start Playoff Run | Hero Ball"
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": null,
            "title": "&#x27;The Voncast&#x27; with Myles Garrett",
            "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
            "url": "https://bleacherreport.com/videos/304730-the-voncast-with-myles-garrett",
            "urlToImage": null,
            "publishedAt": "2022-12-01T18:52:49.4768049Z",
            "content": "Myles Garrett and Von Miller talk playing in the NBA, pick their dream NFL defense and more"
        },
        {
            "source": {
                "id": "nrk",
                "name": "NRK"
            },
            "author": "NRK",
            "title": "De siste sportsnyhetene fra NRK",
            "description": "Her får du de siste sportsnyhetene fra NRK.",
            "url": "https://www.nrk.no/sport/sportsnyheter-1.14660227#1.16422638.1.16422638",
            "urlToImage": "https://gfx.nrk.no/7kT5zGoE2E-GnUKLojH1PQ0I1Nze4Ypu8lxM-oBjubQw.jpg",
            "publishedAt": "2019-08-14T09:09:42Z",
            "content": "25. mai2023kl.19:56Åtte runder i cupens første runde startet 18.00 torsdag kveld. I tre av dem var det lag fra Eliteserien involvert og for Sarpsborg 08 ble det en rask kaldusj borte mot Funnefoss/Vo… [+1505 chars]"
        }
    ];

    constructor() {
        super();
        console.log("Constructer was made of NewsComponent");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResults: 0
        }

    }

    state = {
        progress: 0
    }

    setProgress(progress) {
        this.setState({ progress: progress });
    }

    // async componentDidMount(){
    //     console.log("componentDidMount");
    //     let url = "https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=83cec5d2182b4ba59634c948a1804857";
    //     let data = await fetch(url);
    //     console.log(data);
    //     this.setState({articles: data.articles})
    // }
    
    async updateNews(pageNo) {
        console.log(pageNo);
        this.setState({
            loading: true
        })
        const urls = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=83cec5d2182b4ba59634c948a1804857&page=${pageNo}&pageSize=20`
        const res = await fetch(urls);
        const data = await res.json();
        this.setState({
            articles: data.articles,
            totalResults: data.totalResults,
            loading: false,
        });
        let t = this.props.category;
        const d = t.charAt(0).toUpperCase() + t.substring(1, t.length);
        document.title = `NewsMonkey-${d}`;
    }


    async componentDidMount() {
        this.setState({
            page: 1
        })
        this.updateNews(this.state.page)
    }

    handlePrevClick = () => {
        console.log("Previous button clicked");
        let pn = this.state.page - 1;
        this.setState({
            page: this.state.page - 1
        })
        this.updateNews(pn);
        // this.setState({loading: true});
        // const urls= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=83cec5d2182b4ba59634c948a1804857&page=${this.state.page-1}&pageSize=20`

        // const res = await fetch(urls);
        //     const data = await res.json();
        //     this.setState({
        //         articles: data.articles,
        //         page: this.state.page - 1,
        //         loading : false
        //     });
    }

    handleNextClick = () => {
        console.log("Next click");
        //console.log(this.state.page);
        let pn = this.state.page + 1;
        this.setState({ page: this.state.page + 1 });
        //console.log(this.state.page)
        this.updateNews(pn);
    }

    pns = 1;

    fetchMoreData = async () => {
        let p =  (1/Math.ceil(this.state.totalResults/20))*100;
        this.setProgress(p);
        this.setState({
            progress: p
        })
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(async () => {
            this.pns = this.pns + 1;
            p = await (this.pns/Math.ceil(this.state.totalResults / 20)*100);
            await this.setState({
                progress: p
            })
            //await console.log(this.pns);
            //await console.log(Math.ceil(this.state.totalResults / 20));
            await this.setState({ 
                page: this.state.page + 1,
            
            });
            await console.log(p);
            //await console.log(this.progress);
            this.setState({
                loading: true
            })
            const urls = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=83cec5d2182b4ba59634c948a1804857&page=${this.pns}&pageSize=20`
            const res = await fetch(urls);
            const data = await res.json();
            console.log(p);
            this.setState({
                articles: this.state.articles.concat(data.articles),
                totalResults: data.totalResults,
                loading: false
            });
            let t = this.props.category;
            const d = t.charAt(0).toUpperCase() + t.substring(1, t.length);
            document.title = `NewsMonkey-${d}`;
        }, 1000);
    };


    // this.setState({loading: true});
    //     const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=83cec5d2182b4ba59634c948a1804857&page=${this.state.page+1}&pageSize=20`);
    //     const data = await res.json();
    //     this.setState({
    //         articles: data.articles,
    //         page: this.state.page + 1,
    //         loading : false
    //     });
    


render() {

    console.log("render")
    return (

        <>
            <div className='container my-3'>
                
                <h1 className='text-center' style={{ zIndex: "1", marginTop: "5rem" }}>News-Monkey - Top {this.props.category.charAt(0).toUpperCase() + this.props.category.substring(1, this.props.category.length)} Headlines</h1>
                <LoadingBar height={4} color='#f11946' progress={(1/Math.ceil(this.state.totalResults / 20)*100)} onLoaderFinished={() => this.state.progress}/>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={this.state.loading && <Spinner />}
                ></InfiniteScroll>
                <div className='row'>
                    {!this.state.loading && this.state.articles?.map((element) => {
                        return <div className='col-md-4' key={element.url}>

                            <NewsItem
                                title={element.title ? element.title.substring(0, 45) : ''}
                                description={element.description ? element.description.substring(0, 88) : ''}
                                newsUrl={element.url}
                                url={element.urlToImage} author={element.author} date={element.publishedAt}
                                source={element.source.name}
                            />
                        </div>
                    })}


                </div>
                <div className='container d-flex justify-content-between'>

                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button type="button" disabled={this.state.page >= Math.ceil(this.state.totalResults / 20)} className="btn btn-dark" onClick={this.handleNextClick} style={{ marginLeft: "20px", paddingLeft: "20px", textAlign: "center" }}>Next &rarr;</button>
                </div>
            </div>


        </>
    )
}
}

export default News
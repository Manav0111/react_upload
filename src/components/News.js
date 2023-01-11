import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';



const News= (props)=> {
 const[articles,setarticles]=useState([]);
 const[loading,setloading]=useState(false);
 const[page,setpage]=useState(1);
 const[totalResults,settotalResults]=useState(0);
 

//  document.title=`${(this.props.category).charAt(0).toUpperCase()+(this.props.category).slice(1)}-from NewsMonkey`;

  // constructor(props)
  // {
  //   super(props);
  //   document.title=`${(this.props.category).charAt(0).toUpperCase()+(this.props.category).slice(1)}-from NewsMonkey`;
  //   console.log('i am constructor inside news');
  //   this.state={
  //     articles:[],
  //     loading:false,
  //     page:1,
  //     totalResults:0
  //   }
  // }

  useEffect(()=>{
    async function fetchdata()
    {
      document.title=`${(props.category).charAt(0).toUpperCase()+(props.category).slice(1)}-from NewsMonkey`
      let data= await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=78e3d187350445e7b0094b4894b9f3af&page=1&pageSize=${props.pagesize}`);
      console.log(data);
      setloading(true);
      let parseData=await data.json();
      console.log(parseData);
      setarticles(parseData.articles);
      settotalResults(parseData.totalResults);
      setloading(false);
    }
    fetchdata();
  },[]);
  // async componentDidMount()
  // {
  //   console.log("cdm");
  //   // let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=78e3d187350445e7b0094b4894b9f3af";
  //   let data= await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78e3d187350445e7b0094b4894b9f3af&page=1&pageSize=${this.props.pagesize}`);
  //   console.log(data);
  //   this.setState({loading:true});
  //   let parseData=await data.json();
  //   console.log(parseData);
  //   this.setState({articles:parseData.articles, totalResults:parseData.totalResults,loading:false});
  // }

  // componentDidMount()
  // {
  //   let data=fetch('https://newsapi.org/v2/top-headlines?country=in&category&apiKey=78e3d187350445e7b0094b4894b9f3af&page=1');
  //   data.then((value)=>{
  //     return value.json();
  //   }).then((datajs)=>{
  //     this.setState({articles:datajs.articles});
  //   })

  // }

  const handelPrevClick= async()=>{
    let data= await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=78e3d187350445e7b0094b4894b9f3af&page=${page-1}&pageSize=${props.pagesize}`);
    setloading(true);
    let parseData=await data.json();
    console.log(parseData);
    setarticles(parseData.articles);
    setpage(page-1);
    setloading(false);
    
      
    
  }

  const handelNextClick=async ()=>{
    console.log("Next");
    if(!(page+1>Math.ceil(totalResults/20)))
    {

      let data= await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=78e3d187350445e7b0094b4894b9f3af&page=${page+1}&pageSize=${props.pagesize}`);
      

      setloading(true);
    let parseData=await data.json();
    console.log(parseData);
    setarticles(parseData.articles);
    setpage(page+1);
    setloading(false);
    }
    
  }


    return (
      <div className="container my-3">
        <h1 className="text-center" style={{marginTop:"67px"}}>News Monkey-Top {(props.category).charAt(0).toUpperCase()+(props.category).slice(1)} Headlines</h1> 
        {loading && <Spinner/>}
        <div className="row " style={{marginTop:"20px"}}>
          {!(loading) && articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title} description={element.description?element.description.slice(0,45):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handelPrevClick}  >&larr; Previous</button>
          <button disabled={page+1>Math.ceil(totalResults/20)}  type="button" className="btn btn-info" onClick={handelNextClick } >Next &rarr;</button>

        </div>
      </div>
    );
  
}


News.defaultProps={
  country:'in',
  pagesize:20,
  category:'general'
}

News.propTypes={
  country:PropTypes.string,
  pagesize:PropTypes.number,
  category:PropTypes.string,
}
export default News;
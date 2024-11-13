const CurrentTime=()=>{
    let time=new Date();
return <p class="lead" >Date and Time(IST):{time.toLocaleDateString()}-{time.toLocaleTimeString()}.</p>;
};

export default CurrentTime;
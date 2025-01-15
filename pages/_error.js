function Error({ statusCode }) {
    return (
      <p>
        {statusCode
          ? `서버에서 ${statusCode} 에러가 발생했습니다.`
          : '클라이언트에서 에러가 발생했습니다.'}
      </p>
    );
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
  };
  
  export default Error;
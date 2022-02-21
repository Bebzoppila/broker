
const senToBack = async (fendData: string) => {
    const response = await fetch('', {
        method: 'POST',
        body: fendData,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
    })

}


export default senToBack
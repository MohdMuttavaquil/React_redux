import React from 'react'
import { useSelector } from 'react-redux'

const ResultTable = ({result}) => {
    const passingMarks = useSelector((state)=> state.counter.passingMarks)
    return (
        <>

            <div>

                <div className='personalInfo'>
                    <p><b>Name </b>{result?.presonalInfo?.name}</p>
                    <p><b>Class </b>{result?.presonalInfo?.class}</p>
                    <p><b>Roll No </b>{result?.presonalInfo?.rollNo}</p>
                </div>

                <div className='marks'>
                    <table border="1" cellpadding="8" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Subject</th>
                                <th>Marks</th>
                                <th>Passing Marks</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>English</td>
                                <td>{result?.studentMarks?.english}</td>
                                <td>{passingMarks}</td>
                            </tr>

                            <tr>
                                <td>Hindi</td>
                                <td>{result?.studentMarks?.hindi}</td>
                                <td>{passingMarks}</td>
                            </tr>

                            <tr>
                                <td>Maths</td>
                                <td>{result?.studentMarks?.maths}</td>
                                <td>{passingMarks}</td>
                            </tr>

                            <tr>
                                <td>Science</td>
                                <td>{result?.studentMarks?.science}</td>
                                <td>{passingMarks}</td>
                            </tr>

                            <tr>
                                <td>Socal Science</td>
                                <td>{result?.studentMarks?.socalScience}</td>
                                <td>{passingMarks}</td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            </div>

        </>
    )
}

export default ResultTable
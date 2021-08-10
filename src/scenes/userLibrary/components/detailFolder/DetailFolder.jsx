import React, { useState, useEffect } from 'react'
import { Container, TopContent, MainContent } from "./style"
import { FaPlus, FaBookReader, FaEllipsisH, FaRegFolder, FaTrashAlt, FaPen } from "react-icons/fa"
import Course from '../../../latest/components/course/Course'
import { fetchFolderById, fetchCourses, fetchCourseById } from "../../../../services/database"
import { useParams } from "react-router-dom"
import AddCourseModal from './components/addCourseModal/AddCourseModal'
import { firestore } from "../../../../services/firebase"
import EditFolderModal from './components/editFolderModal/EditFolderModal'
import DeleteFolderModal from './components/deleteFolderModal/DeleteFolderModal'
function DetailFolder() {
    const [folder, setFolder] = useState(null)
    const [courses, setCourses] = useState([])
    const [toggleAddCourseModal, setToggleAddCourseModal] = useState(false)
    const [toggleEditFolderModal, setToggleEditFolderModal] = useState(false)
    const [toggleDeleteFolderModal,setDeleteFolderModal]=useState(false)
    const { id } = useParams()
    useEffect(() => {
        // fetchFolderById(id).then(res=>{
        //     setFolder(res.data())
        //     console.log(res.data())
        // })
        // fetchCourses().then(res=>{
        //     setCourses(res.docs)
        // })
        firestore.collection("folders").doc(id).onSnapshot(snap => {
            setFolder(snap)
        })

    }, [])
    useEffect(() => {
        async function execute() {
            console.log(folder)
            let listCourses = []
            // folder?.data()?.courses?.forEach( (item) => {
            //     fetchCourseById(item).then(res=>{
            //         listCourses.push(res)

            //     })
            // })
            for (let i = 0; i < folder?.data().courses?.length; i++) {
                let course = await fetchCourseById(folder?.data()?.courses[i])
                listCourses.push(course)
                console.log(course)

            }
            console.log(listCourses)
            setCourses(listCourses)
        }
        execute()

    }, [folder])
    console.log(courses)
    return (
        <Container>
            <TopContent>
                <div className="folder-header">
                    <div className="left-header">
                        <div className="num-courses">{folder?.data().courses?.length} học phần</div>
                        <div className="displayName">Tạo bởi luannguyen</div>
                    </div>
                    <div className="right-header">
                        <div className="item" onClick={() => setToggleAddCourseModal(true)}>
                            <FaPlus></FaPlus>
                        </div>
                        <div className="item">
                            <FaBookReader></FaBookReader>
                        </div>
                        <div class="dropdown">
                            <div className="item" data-toggle="dropdown">
                                <FaEllipsisH></FaEllipsisH>
                            </div>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                <p class="dropdown-item" href="#" onClick={() => setToggleEditFolderModal(true)}>
                                    <FaPen></FaPen>
                                    Sửa
                                </p>
                                <p class="dropdown-item text-danger" onClick={()=>setDeleteFolderModal(true)}>
                                    <FaTrashAlt></FaTrashAlt>
                                    Xóa
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="folder-title">
                    <FaRegFolder></FaRegFolder>
                    {folder?.data()?.title}
                </div>
                <p className="description">{folder?.data()?.description}</p>

            </TopContent>
            <MainContent>
                {
                    courses?.map(item => {
                        return <Course course={item}></Course>
                    })
                }
            </MainContent>
            {toggleAddCourseModal && <AddCourseModal folder={folder} setToggleAddCourseModal={setToggleAddCourseModal}></AddCourseModal>}
            {
                toggleEditFolderModal && <EditFolderModal folder={folder} setToggleEditFolderModal={setToggleEditFolderModal}></EditFolderModal>
            }
            {toggleDeleteFolderModal&&<DeleteFolderModal folder={folder} setDeleteFolderModal={setDeleteFolderModal}></DeleteFolderModal>}
        </Container>
    )
}

export default DetailFolder

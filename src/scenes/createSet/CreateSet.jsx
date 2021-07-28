import React, { useState, useEffect } from 'react'
import Input from './components/inputForm/Input'
import TermItem from './components/termItem/TermItem'
import { CourseInfo, Container, AddTerm, ListTerms, StickyHeader } from "./style"
import { FaPlus } from "react-icons/fa"
import { useSelector, useDispatch } from "react-redux"
import { addTerm, updateCourseInfo, setCourse } from "../../services/slices/createSetSlice"
import { useContext } from "react"
import { AuthContext } from "../../services/authContext"
import { saveToDatabase,updateCourse } from "../../services/database"
import { auth } from "../../services/firebase"
import { useHistory, useParams } from "react-router-dom"
import { fetchCourseById } from "../../services/database"
function CreateSet({ props }) {
    const createSet = useSelector(state => state.createSet)
    const dispatch = useDispatch()
    const history = useHistory()
    const [input, setInput] = useState({
        title: "",
        description: ""
    })
    const [stickyHeader, setStickyHeader] = useState(false)
    const authContext = useContext(AuthContext)
    const { id } = useParams()
    function handleInput(e) {
        setInput(pre => {
            return { ...pre, [e.target.name]: e.target.value }
        })
    }
    function handleDone() {
        let data = { ...createSet }
        data.userID = auth.currentUser.uid
        saveToDatabase(data).then(() => {
            history.push("/latest")
        })
    }
    async function handleEdit()
    {
        await updateCourse(id,createSet)
        console.log(createSet)
        history.push(`/${id}/detail`)
    }
    useEffect(async () => {
        if (id) {
            let course = await fetchCourseById(id)
            dispatch(setCourse(course.data()))
            let title = course.data().title
            let description = course.data().description
            setInput({ title, description })
        }
    }, [id])
    useEffect(() => {
        dispatch(updateCourseInfo(input))
    }, [input])
    console.log(createSet)
    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY > 50 ) {
    //             setStickyHeader(true)
    //         }
    //         else {
    //             setStickyHeader(false)
    //         }
    //     })
    // })
    return (
        <Container>
            {stickyHeader && <StickyHeader>
                <p className="title">Tạo học phần mới</p>
                <div className="done-btn">
                    <button>Tạo</button>
                </div>

            </StickyHeader>}
            <CourseInfo>
                {!stickyHeader && <div className="top-course-info">
                    <h3>Tạo học phần mới</h3>
                    <div className="done-btn-sm">
                        <button>Tạo</button>
                    </div>
                </div>}
                <div className="title">
                    <input type="text" name="title" value={input.title} onChange={(e) => handleInput(e)} />
                    <label htmlFor="">TIÊU ĐỀ</label>
                </div>
                <div className="description">
                    <input type="text" name="description" value={input.description} onChange={(e) => handleInput(e)} />
                    <label htmlFor="">MÔ TẢ</label>
                </div>
            </CourseInfo>
            <ListTerms>
                {
                    createSet.listTerms.map((item, index) => {
                        return <TermItem key={item.id} index={index} term={item}></TermItem>
                    })
                }

                <AddTerm onClick={() => dispatch(addTerm())}>
                    <span className="wrapper">
                        <FaPlus></FaPlus>
                        <span>THÊM THẺ</span>
                    </span>
                </AddTerm>
                {id ?
                    <div className="done-btn">
                        <button onClick={() => handleEdit()}>Hoàn tất</button>
                    </div> :
                    <div className="done-btn">
                        <button onClick={() => handleDone()}>Tạo</button>
                    </div>}
            </ListTerms>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestiae repellat necessitatibus earum nobis saepe id totam, qui modi tempore nemo officia! Temporibus delectus vitae consequuntur reiciendis, autem, vero doloribus necessitatibus accusantium, est omnis exercitationem? Iure tempora blanditiis ducimus mollitia repudiandae harum aut architecto est tempore cum enim fugiat maiores voluptatem quidem ad officiis similique consequatur, sint tenetur debitis id! Totam magnam consequatur error velit dolores ea distinctio autem expedita at consequuntur adipisci amet eveniet aspernatur exercitationem obcaecati hic voluptatem temporibus rerum, repellendus saepe quibusdam laboriosam nobis molestiae. Quis quos accusamus repellendus ducimus perspiciatis dolorem iste maxime, possimus corporis mollitia ipsa rem eveniet fugit enim ipsam. Fugiat totam quibusdam nesciunt adipisci dolorem doloremque aut ab nemo, ea, quo autem ullam libero pariatur aliquam iusto, minima sed magni blanditiis? Quisquam nesciunt aliquid consequuntur! Error eos consequatur delectus est accusantium natus fugit nostrum architecto illo voluptatum, distinctio beatae pariatur vero placeat, adipisci repellendus perferendis ratione aspernatur nihil maxime impedit id odio! Dicta ex placeat nesciunt in possimus tempore ipsa vitae, pariatur dolorem voluptatum magnam ipsum modi alias asperiores reprehenderit quod commodi natus. Magnam aliquid earum voluptatibus, vero placeat, asperiores nobis, obcaecati quibusdam voluptate distinctio exercitationem! Itaque neque ipsum inventore ducimus. Ipsum rem rerum assumenda voluptates? Cumque at autem ullam iure rem reprehenderit quam exercitationem voluptates magni unde ipsa quas, nemo aliquam pariatur eligendi blanditiis, harum repellat minus dignissimos aut. Dolor, dicta eveniet optio velit architecto repudiandae placeat iste explicabo dignissimos, labore reprehenderit voluptas blanditiis expedita odio, perferendis numquam tempora officia! Libero explicabo saepe obcaecati, repellat placeat iure nisi ut sapiente labore, cumque dignissimos, neque natus consequuntur? Quidem officia necessitatibus saepe similique quos praesentium voluptatibus hic pariatur aliquam, ipsa dolorum tempora omnis error tempore temporibus expedita iste porro tenetur fugit odit voluptatum quasi eveniet, dolore perspiciatis. Cupiditate, animi delectus reiciendis suscipit quas, quos odit quia consequuntur ut facilis nostrum natus deleniti consequatur aliquid est labore omnis vero explicabo ipsam? Maiores magnam nihil doloribus explicabo? Molestias in corrupti ullam, unde deleniti laudantium, culpa non tempore harum dolorem est quisquam. Assumenda perspiciatis quos minima earum ratione soluta esse dolore accusamus saepe officia perferendis alias eaque cupiditate cum eveniet reiciendis numquam, vel aliquam temporibus exercitationem nostrum amet. Magni accusantium mollitia, fugit vero omnis quis, consequuntur quidem repudiandae in sint repellat architecto quae. Repellendus delectus, recusandae sapiente numquam veritatis molestias consectetur placeat minus commodi ipsam distinctio libero inventore et fugit? Ex totam sapiente dolorum ea nam minus accusantium maiores autem. Id, mollitia libero. Corporis assumenda soluta odio rem optio eligendi delectus, officia voluptatum fuga dolorem, nulla quisquam eos? Ad nesciunt molestias, tenetur aut, accusamus deserunt similique neque accusantium debitis iste ipsum sunt corporis? Sit error vitae et, aliquid ipsa eveniet neque quia deleniti earum enim in. Quidem non exercitationem itaque iusto voluptatum, nobis optio. Veritatis aliquam dolor inventore natus, sequi excepturi quas tempore dolore? Quo minima error harum repellendus aspernatur blanditiis ipsa. Facilis velit soluta voluptatibus fugiat amet distinctio non ipsam explicabo sint? Quae voluptates dolorem natus quam dolorum nemo. Consectetur dolores suscipit provident voluptatem minus quam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat exercitationem voluptas quidem, maiores suscipit tempora harum quo repudiandae nihil nam ad atque aut aspernatur minima omnis rem explicabo ea reprehenderit cum qui iure perferendis hic aliquid! Temporibus, reprehenderit cupiditate praesentium, impedit repudiandae enim molestias assumenda, doloremque commodi sit accusamus consequatur quasi illum eum odio earum nobis sint vero ullam. Enim distinctio totam veritatis porro error? Ratione exercitationem ducimus quasi ipsam veritatis qui impedit repudiandae obcaecati quis odio, voluptas nesciunt vero cupiditate atque, perspiciatis autem reprehenderit tempore. Nulla dolorem, animi aliquid quaerat, at, molestiae magnam id nihil deserunt nam architecto rem.</p>
        </Container>
    )
}

export default CreateSet

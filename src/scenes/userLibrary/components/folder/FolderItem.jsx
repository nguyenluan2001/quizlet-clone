import React from 'react'
import { FaRegFolder } from "react-icons/fa"
import {FolderItemContainer} from "./style"
import {useRouteMatch} from "react-router-dom"
function FolderItem({folder}) {
    const {path}=useRouteMatch()
    console.log(path)
    return (
        <FolderItemContainer to={`${path}/${folder.id}/sets`}>
            <p className="num-courses">1 học phần</p>
            <p className="folder-title">
                <FaRegFolder></FaRegFolder>
                {folder.data().title}
            </p>

        </FolderItemContainer>
    )
}

export default FolderItem

import { useEffect, useState } from "react";
import Axios from "axios";

import adminStyles from "../Admin.style";
import useStyles from "./Teachers.style";
import modalStyles from "../../Modal.style";
import Search from "../../forms/Search";
import Table from "../../table/Table";
import ButtonSM from "../../forms/ButtonSM";
import Credentials from "../../forms/Credentials";
import DynamicInputs from "../../forms/DynamicInputs";
import listIcon from "../../../../assets/icons/listSubMenu.svg";
import newTeacher from "../../../../assets/icons/newUser.svg";
import editTeacher from "../../../../assets/icons/edit.svg";
import deleteTeacher from "../../../../assets/icons/delete.svg";
import saveIcon from "../../../../assets/icons/save.svg";
import cancelIcon from "../../../../assets/icons/cancel.svg";
import alertIcon from "../../../../assets/images/alert.svg";
import deletIconW from "../../../../assets/icons/deleteW.svg";
import editIconW from "../../../../assets/icons/editLight.svg";
import { enqueueSnackbar } from "notistack";

const TeacherList = () => {
  const adminClasses = adminStyles();
  const classes = useStyles();
  const modalClasses = modalStyles();

  const [isModalNewOpen, setIsModalNewOpen] = useState(false);
  const [isModalListOpen, setIsModalListOpen] = useState(false);
  const [isModalAssingOpen, setIsModalAssingOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDeleteDialog, setIsDeleteDilog] = useState(false);
  const [idDelete, setIdDelete] = useState("");
  const [idDeleteSpecific, setIdDeleteSpecific] = useState("");
  const [editingRow, setEditingRow] = useState(null);
  const [editedId, setEditedId] = useState("");

  const [assignName, setAssignName] = useState("");
  const [assignSurnameP, setAssignSurnameP] = useState("");
  const [assignSurnameM, setAssignSurnameM] = useState("");
  const [assignId, setAssignId] = useState("");
  const [dataAssignName, setDataAssignName] = useState([]);
  const [newDataAssign, setNewDataAssign] = useState([]);

  const [dataAssign, setDataAssign] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [careers, setCareers] = useState([]);
  const [years, setYears] = useState([0]);
  const [subjects, setSubjects] = useState([]);
  const [selectedCareer, setSelectedCareer] = useState("");
  const [selectedYear, setSelectedYear] = useState(0);
  const [stateUser, setStateUser] = useState("");

  const [surnamePTeacher, setSurnamePTeacher] = useState("");
  const [surnameMTeacher, setSurnameMTeacher] = useState("");
  const [nameTeacher, setNameTeacher] = useState("");
  const [ciTeacher, setCiTeacher] = useState("");
  const [emailTeacher, setEmailTeacher] = useState("");
  const [phoneTeacher, setPhoneTeacher] = useState("");
  const [userTeacher, setUserTeacher] = useState("");
  const [passwordTeacher, setPasswordTeacher] = useState("");

  //---------------Obtener Materias
  useEffect(() => {
    Axios.get("http://localhost:3001/api/careers/enable")
      .then((response) => {
        setCareers(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener careers:", error);
      });
  }, []);

  useEffect(() => {
      Axios.get(
        `http://localhost:3001/api/subjects?carrera=${selectedCareer}&year=${selectedYear}`
      )
        .then((response) => {
          const careerAssign = dataAssign.map(item=>item[2]);
          response.data = response.data.filter(item=>{
            return careerAssign.indexOf(item.subject) === -1 
          })
          setSubjects(response.data);
        })
        .catch((error) => {
          console.error("Error al obtener subjects:", error);
        });
  }, [selectedCareer, selectedYear, dataAssign]);

  useEffect(()=>{
    const years = careers.find(item => item.career === selectedCareer)?.durationCar || 0;
    let yearsArray = []
    for (let index = 1; index <= years; index++) {
      yearsArray.push(index);
    }
    setYears(yearsArray);
  },[selectedCareer])

  const handleCareerChange = (event) => {
    setSelectedCareer(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  //-----------------------------------
  const columns = [
    "ID",
    "Usuario",
    "Paterno",
    "Materno",
    "Nombre",
    "CI",
    "Correo",
    "Teléfono",
    "Estado",
    "Materias",
    "Acción",
  ];

  //obtener todos los datos del docentes
  const [data, setData] = useState([]);
  const loadData = () => {
    Axios.get("http://localhost:3001/api/teachers")
      .then((res) => {
        const dataArray = res.data.map((teacher, index) => [
          index + 1,
          teacher.user,
          teacher.paterno,
          teacher.materno,
          teacher.names,
          teacher.ci,
          teacher.email,
          teacher.phone,
          teacher.stateUser,
          teacher.password,
          teacher.idTeacher,
        ]);
        setData(dataArray);
      })
  }
  useEffect(loadData, []);

  const columnsModal = [
    "Paterno",
    "Materno",
    "Nombre",
    "Carrera",
    "Materia",
    "Año",
  ];

  //Lista de aignaciones de todos los docentes
  const [dataModal, setDataModal] = useState([]);

  const loadDataModal = () => {
    Axios.get("http://localhost:3001/api/subjectTeacher")
    .then((res) => {
      const dataArrayModal = res.data.map((subjectTeacher) => [
        subjectTeacher.paterno,
        subjectTeacher.materno,
        subjectTeacher.names,
        subjectTeacher.career,
        subjectTeacher.subject,
        subjectTeacher.year,
      ]);
      setDataModal(dataArrayModal);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  useEffect(loadDataModal, []);

  const fieldsC1 = [
    {
      label: "Apellido Paterno",
      placeholder: "",
      type: "text",
      id: "surnamePTeacher",
    },
    { label: "Nombre", placeholder: "", type: "", id: "nameTeacher" },
    {
      label: "Correo electrónico",
      placeholder: "correo@gmail.com",
      type: "email",
      id: "emailTeacher",
    },
    {
      label: "Estado",
      placeholder: "",
      type: "select",
      id: "stateUser",
      options: ['habilitado','deshabilitado']
    }
  ];
  const fieldsC2 = [
    {
      label: "Apellido Materno",
      placeholder: "",
      type: "text",
      id: "surnameMTeacher",
    },
    { label: "CI", placeholder: "", type: "text", id: "ciTeacher" },
    { label: "Teléfono", placeholder: "", type: "text", id: "phoneTeacher" },
  ];

  const columnsAssign = ["Carrera", "Año", "Materia", "Estado", "Acción"];

  const handleOpenModalNew = () => {
    setIsModalNewOpen(!isModalNewOpen);
    setSelectedCareer("");
    setSelectedSubject("");
    setSelectedYear("");
  };
  const handleOpenModalEdit = () => {
    setIsModalEditOpen(!isModalEditOpen);
  };

  const handleOpenModalList = () => {
    setIsModalListOpen(!isModalListOpen);
  };
  const handleCloseModalAssign = () => {
    setSelectedCareer("");
    setSelectedSubject("");
    setSelectedYear(0);
    setIsModalAssingOpen(!isModalAssingOpen);
  };

  const loadDataSubjectTeacher = teacherId => {
    Axios.get(
      `http://localhost:3001/api/subjectTeacher/subjects?idTeacher=${teacherId}`
    )
    .then((response) => {

      const subjects = response.data.map((subject) => [
        subject.career,
        subject.year,
        subject.subject,
        subject.stateTeaSub,
        subject.idTeaSub,
      ]);
      setDataAssign(subjects);
    })
    .catch((error) => {
      console.error("Error fetching assigned subjects:", error);
    });
  }

  const handleModalAssign = (rowId) => {
    setIsModalAssingOpen(!isModalAssingOpen);
    const row = data[rowId];
    const teacherId = row[10];
    setAssignId(teacherId);
    setAssignSurnameP(row[2]);
    setAssignSurnameM(row[3]);
    setAssignName(row[4]);

    // Fetch assigned subjects for the selected teacher
    loadDataSubjectTeacher(teacherId);
  };

  const handleDeleteModal = (id,idSpecific) => {
    setIsDeleteDilog(!isDeleteDialog);
    setIdDelete(id);
    setIdDeleteSpecific(idSpecific);
  };
  const handleFinalDeletion = () => {
    if (isModalAssingOpen) {
      Axios.delete(`http://localhost:3001/api/subjectTeacher/changeState/${idDeleteSpecific}`)
      .then(
        loadDataSubjectTeacher(assignId))
      .then(
        ()=>{
          enqueueSnackbar('Editado',{variant:'success'});
          setIsDeleteDilog(!isDeleteDialog);
          setIsModalAssingOpen(!isModalAssingOpen);
        }
      )
      .catch(error=>{
        console.log(error);
      })
      setIsDeleteDilog(!isDeleteDialog);
    } else {
      Axios.delete(`http://localhost:3001/api/teachers/${idDeleteSpecific}`).then(()=>{
        loadData();
        enqueueSnackbar('deshabilitado',{variant:'success'});
        setIsDeleteDilog(!isDeleteDialog);
      }).catch(error=>{
        console.log(error)
      })
      
    }
  };
  const handleInputChange = (id, newValue) => {
    switch (id) {
      case "surnamePTeacher":
        setSurnamePTeacher(newValue);
        break;
      case "surnameMTeacher":
        setSurnameMTeacher(newValue);
        break;
      case "nameTeacher":
        setNameTeacher(newValue);
        break;
      case "emailTeacher":
        setEmailTeacher(newValue);
        break;
      case "ciTeacher":
        setCiTeacher(newValue);
        break;
      case "phoneTeacher":
        setPhoneTeacher(newValue);
      case "stateUser":
        setStateUser(newValue);
        break;
      default:
        break;
    }
  };
  const handleInputChangeEdit = (id, newValue) => {
    const updatedRow = { ...editingRow, [id]: newValue };
    setEditingRow(updatedRow);
  };

  //Crear un nuevo Docente
  const handleSave = () => {
    const newRow = {
      user: userTeacher,
      password: passwordTeacher,
      paterno: surnamePTeacher,
      materno: surnameMTeacher,
      names: nameTeacher,
      ci: ciTeacher,
      email: emailTeacher,
      phone: phoneTeacher,
    };

    Axios.post("http://localhost:3001/api/teachers", newRow)
      .then((res) => {
        loadData();
        enqueueSnackbar('Creado',{variant:'success'});
        setIsModalNewOpen(false);
      })
      .catch((error) => {
        enqueueSnackbar(error.response.data.message,{variant:'warning'})
      });
  };

  //obtener los datos actuales del teacher
  const handleEditClick = (rowId) => {
    const row = data[rowId];
    const newData = {
      userTeacher: row[1],
      surnamePTeacher: row[2],
      surnameMTeacher: row[3],
      nameTeacher: row[4],
      ciTeacher: row[5],
      emailTeacher: row[6],
      phoneTeacher: row[7],
      stateUser: row[8],
    };
    setUserTeacher(row[1]);
    setIsModalEditOpen(true);
    setEditingRow(newData);
    setEditedId(row[10]);
  };

  //actulizar los datos
  const handleEditSave = () => {
    if (editingRow) {
      const editedRowData = {
        user: editingRow.userTeacher || "",
        paterno: editingRow.surnamePTeacher || "",
        materno: editingRow.surnameMTeacher || "",
        names: editingRow.nameTeacher || "",
        ci: editingRow.ciTeacher || "",
        email: editingRow.emailTeacher || "",
        phone: editingRow.phoneTeacher || "",
        stateUser: editingRow.stateUser || "",
        password: passwordTeacher || "",
      };

      Axios.put(`http://localhost:3001/api/teachers/${editedId}`, editedRowData)
        .then((res) => {
          loadData();
          enqueueSnackbar('Editado', {variant:'success'})
          setIsModalEditOpen(false);
          setEditingRow(null);
        })
        .catch((err) => {
          enqueueSnackbar(err.response.data.message,{variant:'warning'})
        });
    }
  };

  const handleAssignSubject = () => {
    if (selectedCareer && selectedYear && selectedSubject) {

      const newAssign = {
        idTeacher : assignId,
        subjectName : selectedSubject
      }
      Axios.post("http://localhost:3001/api/subjectTeacher",newAssign).then(()=>{
        enqueueSnackbar('Asignado',{variant:'success'});
        loadDataSubjectTeacher(assignId);
        loadDataModal();
      }).catch((err)=>{
        enqueueSnackbar(err.response.data.message,{variant:'warning'})
      })

      ///setSelectedSubject("");
    } else {
      enqueueSnackbar("¡Faltan campos por seleccionar!",{variant:'warning'});
    }
  };
  const handleSaveAssignment = () => {
    const newData = {
      idTeacher : assignId,
      newAssign : newDataAssign
    }
    setNewDataAssign([]);
    setSelectedCareer("");
    setSelectedYear("");
    setSelectedSubject("");
    setIsModalAssingOpen(!isModalAssingOpen);
  };
  if (isDeleteDialog) {
    return (
      <div className={modalClasses.total}>
        <div className={modalClasses.under}></div>        <div className={modalClasses.containerDialog}>
          <div className={modalClasses.alert}>
            <img
              className={modalClasses.iconAlert}
              src={alertIcon}
              alt="alertDelete"
            />
          </div>
          <p className={modalClasses.cuestionAlert}>
            ¿Está seguro de que desea eliminar a <br /> {idDelete}?
          </p>
          <div className={modalClasses.containerButtons}>
            <div className={modalClasses.buttonAction}>
              <ButtonSM
                icon={cancelIcon}
                text="Cancelar"
                className2={modalClasses.buttonCancel}
                onClick={handleDeleteModal}
              />
            </div>
            <div className={modalClasses.buttonAction}>
              <ButtonSM
                icon={deletIconW}
                text="Eliminar"
                className2={modalClasses.buttonDelete}
                onClick={handleFinalDeletion}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (isModalNewOpen) {
    return (
      <div className={modalClasses.total}>
        <div className={modalClasses.under}></div>        <div className={modalClasses.container}>
          <div className={modalClasses.content}>
            <p className={classes.titlemodalList}>NUEVO DOCENTE</p>
            <div className={modalClasses.containerInputs}>
              <DynamicInputs
                fields={fieldsC1}
                className={modalClasses.inputs}
                onChange={handleInputChange}
                values={
                  {
                    userTeacher,
                    passwordTeacher,
                    surnamePTeacher,
                    surnameMTeacher,
                    nameTeacher,
                    ciTeacher,
                    emailTeacher,
                    phoneTeacher,
                  }
                }
              />
              <DynamicInputs
                fields={fieldsC2}
                className={modalClasses.inputs}
                onChange={handleInputChange}
                values={
                  {
                    userTeacher,
                    passwordTeacher,
                    surnamePTeacher,
                    surnameMTeacher,
                    nameTeacher,
                    ciTeacher,
                    emailTeacher,
                    phoneTeacher,
                  }
                }
              />
            </div>
            <div className={modalClasses.contentButtons}>
              <Credentials
                onUserChange={setUserTeacher}
                onPasswordChange={setPasswordTeacher}
              />
              <div className={classes.buttonTeacher}>
                <div className={classes.buttonS}>
                  <ButtonSM
                    icon={saveIcon}
                    text="Guardar"
                    className={modalClasses.icons}
                    onClick={handleSave}
                  />
                </div>
                <div className={classes.buttonS}>
                  <ButtonSM
                    icon={cancelIcon}
                    text="Cancelar"
                    className={modalClasses.icons}
                    onClick={handleOpenModalNew}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (isModalListOpen) {
    return (
      <div className={modalClasses.total}>
        <div className={modalClasses.under}></div>        <div className={modalClasses.container}>
          <div className={modalClasses.content}>
            <p className={classes.titlemodalList}>
              LISTA DE ASIGNACION DE TODOS LOS DOCENTES
            </p>
            <div className={modalClasses.tableModal}>
              <Table
                columns={columnsModal}
                data={dataModal}
                className={classes.table}
                className2={classes.tableBody}
              />
            </div>
            <div className={classes.contentButtons}>
              <ButtonSM
                icon={cancelIcon}
                text="Cancelar"
                className={modalClasses.icons}
                onClick={handleOpenModalList}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (isModalAssingOpen) {
    return (
      <div className={modalClasses.total}>
        <div className={modalClasses.under}></div>        <div className={modalClasses.container}>
          <div className={modalClasses.content}>
            <p className={classes.titleEnable}>HABILITAR MATERIAS</p>
            <div className={classes.containerName}>
              <div className={classes.nameteacher}>
                <p>
                  {assignName} {assignSurnameP} {assignSurnameM}
                </p>
                <p>ID: {assignId}</p>
              </div>
            </div>
            <hr className={classes.lineEnable} />
            <div className={classes.containerEnable}>
              <div className={classes.containerAssign}>
                <p className={classes.subtitleAssign}>ASIGNAR MATERIAS</p>
                <div className={classes.assign}>
                  <label className={classes.labelSelect} htmlFor="careers">
                    Carreras:
                  </label>
                  <select
                    className={classes.select}
                    id="careers"
                    name="careers"
                    value={selectedCareer}
                    onChange={handleCareerChange}
                  >
                    <option value="">Seleccione la Carrera</option>
                    {careers.map((career, index) => (
                      <option key={index} value={career.career}>
                        {career.career}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={classes.assign}>
                  <label className={classes.labelSelect} htmlFor="subjects">
                    Año:
                  </label>
                  
                  <select
                      className={classes.select}
                      id="years"
                      name="years"
                      value={selectedYear}
                      onChange={handleYearChange}
                    >
                      <option value="">Seleccione el Año</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                </div>
                <div className={classes.assign}>
                    <label className={classes.labelSelect} htmlFor="years">
                      Seleccionar Materia:
                    </label>
                    <select
                    className={classes.select}
                    id="subjects"
                    name="subjects"
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                  >
                    <option value="">Seleccione la Materia</option>
                    {subjects.map((materia, index) => (
                      <option key={index} value={materia.subject}>
                        {materia.subject}
                      </option>
                    ))}
                    </select>
                </div>
                <div className={classes.containerSmall}>
                  <div className={classes.buttonContainer}>
                    <ButtonSM
                      text="Asignar"
                      className2={classes.buttonAssign}
                      onClick={handleAssignSubject}
                    />
                  </div>
                </div>
              </div>
              <div className={classes.containerSubjectAssign}>
                <p className={classes.subtitleAssign}>MATERIAS ASIGNADAS</p>
                <Table
                  columns={columnsAssign}
                  data={dataAssign}
                  columnIcon={"Acción"}
                  icon2={deleteTeacher}
                  className={classes.tableSubjects}
                  className2={classes.bodyTable}
                  onDelete={handleDeleteModal}
                  start={0}
                  end={3}
                />
                <div className={classes.butonsActions}>
                  <div className={classes.buttons}>
                    <ButtonSM
                      icon={cancelIcon}
                      text="Cancelar"
                      className={classes.iconTeacher}
                      onClick={handleCloseModalAssign}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (isModalEditOpen) {
    return (
      <div className={modalClasses.total}>
        <div className={modalClasses.under}></div>        <div className={modalClasses.container}>
          <div className={modalClasses.content}>
            <p className={classes.titlemodalList}>EDITAR DOCENTE</p>
            <div className={modalClasses.containerInputs}>
              <DynamicInputs
                fields={fieldsC1}
                className={modalClasses.inputs}
                onChange={handleInputChangeEdit}
                values={editingRow}
              />
              <DynamicInputs
                fields={fieldsC2}
                className={modalClasses.inputs}
                onChange={handleInputChangeEdit}
                values={editingRow}
              />
            </div>
            <div className={modalClasses.contentButtons}>
              <Credentials
                nameUser={userTeacher}
                onUserChange={setUserTeacher}
                onPasswordChange={setPasswordTeacher}
              />
              <div className={classes.buttonTeacher}>
                <div className={classes.buttonS}>
                  <ButtonSM
                    icon={editIconW}
                    text="Editar"
                    className={modalClasses.icons}
                    onClick={handleEditSave}
                  />
                </div>
                <div className={classes.buttonS}>
                  <ButtonSM
                    icon={cancelIcon}
                    text="Cancelar"
                    className={modalClasses.icons}
                    onClick={handleOpenModalEdit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={adminClasses.content}>
        <div className={classes.tittleTeacher}>
          <p className={adminClasses.text}>LISTA DE DOCENTES</p>
          <hr className={adminClasses.lineTitle} />
        </div>
        <div className={classes.headTeachers}>
          <Search text={"Buscar"} onSearch={setSearchTerm} />
          <div className={classes.buttonsTech}>
            <div>
              <ButtonSM
                icon={listIcon}
                text="Lista de asignación"
                className={classes.iconTeacher}
                className2={classes.buttonList}
                onClick={handleOpenModalList}
              />
            </div>
            <div className={classes.button}>
              <ButtonSM
                icon={newTeacher}
                text="Nuevo"
                className={classes.iconTeacher}
                onClick={handleOpenModalNew}
              />
            </div>
          </div>
        </div>
        <div className={classes.tableTch}>
          <Table
            columns={columns}
            data={data.filter((row) =>
              Object.values(row).some(
                (val) =>
                  typeof val === "string" &&
                  val.toLowerCase().includes(searchTerm.toLowerCase())
              )
            )}
            columnIcon={"Acción"}
            icon={editTeacher}
            textLink="Asignar"
            columnAction={"Materias"}
            icon2={deleteTeacher}
            onClick={handleModalAssign}
            onEdit={handleEditClick}
            onDelete={handleDeleteModal}
            start={2}
            end={5}
          />
        </div>
      </div>
    );
  }
};

export default TeacherList;

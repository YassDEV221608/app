import React, { useState } from 'react';
import './FormComponent.css';

const FormComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [addr, setAddr] = useState('');
  const [exper, setExper] = useState('');
  const [framework, setFramework] = useState('');
  const [message, setMessage] = useState('');
  const [educationList, setEducationList] = useState([{ name: '' }]);
  
  const [errors, setErrors] = useState({});
  const [certificates, setCertificates] = useState([{ addr: '' }]);
  const [languages, setLanguages] = useState([{ name: '' }]);
  const [interests, setInterests] = useState([{ name: '' }]);
  const [skills, setSkills] = useState([{ name: '' }]);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (firstName.trim() === '') {
      errors.firstName = 'Please enter your first name';
    }
    if (lastName.trim() === '') {
      errors.lastName = 'Please enter your last name';
    }
    if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (Object.keys(errors).length === 0) {
      console.log({ firstName, lastName, email, tel, addr, framework, message, educationList });
      window.open('/pdf.pdf', '_blank');
    } else {
      setErrors(errors);
    }
  };

  const handleCertificateChange = (e, index) => {
    const { value } = e.target;
    const newCertificates = [...certificates];
    newCertificates[index].addr = value;
    setCertificates(newCertificates);
  };

  const addCertificate = () => {
    setCertificates([...certificates, { addr: '' }]);
  };

  const removeCertificate = (index) => {
    const newCertificates = certificates.filter((_, i) => i !== index);
    setCertificates(newCertificates);
  };

  const handleLanguageChange = (e, index) => {
    const { value } = e.target;
    const newLanguages = [...languages];
    newLanguages[index].name = value;
    setLanguages(newLanguages);
  };

  const addLanguage = () => {
    setLanguages([...languages, { name: '' }]);
  };

  const removeLanguage = (index) => {
    const newLanguages = languages.filter((_, i) => i !== index);
    setLanguages(newLanguages);
  };

  const handleInterestChange = (e, index) => {
    const { value } = e.target;
    const newInterests = [...interests];
    newInterests[index].name = value;
    setInterests(newInterests);
  };

  const addInterest = () => {
    setInterests([...interests, { name: '' }]);
  };

  const removeInterest = (index) => {
    const newInterests = interests.filter((_, i) => i !== index);
    setInterests(newInterests);
  };

  const handleEducationChange = (e, index) => {
    const { value } = e.target;
    const newEducationList = [...educationList];
    newEducationList[index].name = value;
    setEducationList(newEducationList);
  };

  const addEducation = () => {
    setEducationList([...educationList, { name: '' }]);
  };

  const removeEducation = (index) => {
    const newEducationList = educationList.filter((_, i) => i !== index);
    setEducationList(newEducationList);
  };

  const handleSkillChange = (e, index) => {
    const { value } = e.target;
    const newSkills = [...skills];
    newSkills[index].name = value;
    setSkills(newSkills);
  };

  const addSkill = () => {
    setSkills([...skills, { name: '' }]);
  };

  const removeSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-24 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('background.jpg')" }}>
      <form className="flex flex-col w-11/12 max-w-md bg-black bg-opacity-70 p-5 border border-white rounded-lg mt-200" onSubmit={handleSubmit}>
        <div className="mb-5 border border-white rounded-lg p-4 bg-black bg-opacity-50 text-white mt-5 pt-4">
          <h2 className="text-2xl">Entrez vos Informations</h2>
          <div className="mb-5">
            <label className="block mb-1">NOM</label>
            <input type="text" className="w-full p-2 mb-2 border border-white rounded bg-transparent text-white box-border" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            {errors.firstName && <div className="text-red-500">{errors.firstName}</div>}
          </div>
          <div className="mb-5">
            <label className="block mb-1">Prénom</label>
            <input type="text" className="w-full p-2 mb-2 border border-white rounded bg-transparent text-white box-border" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            {errors.lastName && <div className="text-red-500">{errors.lastName}</div>}
          </div>
          <div className="mb-5">
            <label className="block mb-1">Email</label>
            <input type="email" className="w-full p-2 mb-2 border border-white rounded bg-transparent text-white box-border" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <div className="text-red-500">{errors.email}</div>}
          </div>
          <div className="mb-5">
            <label className="block mb-1">Numéro Téléphone</label>
            <input type="tel" className="w-full p-2 mb-2 border border-white rounded bg-transparent text-white box-border" value={tel} onChange={(e) => setTel(e.target.value)} />
          </div>
          <div className="mb-5">
            <label className="block mb-1">Adresse</label>
            <input type="text" className="w-full p-2 mb-2 border border-white rounded bg-transparent text-white box-border" value={addr} onChange={(e) => setAddr(e.target.value)} />
          </div>
          <div className="mb-5">
            <label className="block mb-1">Expérience</label>
            <input type="text" className="w-full p-2 mb-2 border border-white rounded bg-transparent text-white box-border" value={exper} onChange={(e) => setExper(e.target.value)} />
          </div>
          <div>
            {certificates.map((certificate, index) => (
              <div className="mb-5" key={index}>
                <label className="block mb-1">Certificats</label>
                <input
                  type="text"
                  className="w-full p-2 mb-2 border border-white rounded bg-transparent text-white box-border"
                  value={certificate.addr}
                  onChange={(e) => handleCertificateChange(e, index)}
                />
                <button type="button" className="p-2 bg-red-500 text-white rounded" onClick={() => removeCertificate(index)}>
                  Supprimer
                </button>
              </div>
            ))}
            <button type="button" className="p-2 bg-blue-500 text-white rounded" onClick={addCertificate}>
              + Ajouter un certificat
            </button>
          </div>
          <h3 className="text-xl mt-5">Langue</h3>
          <div>
            {languages.map((language, index) => (
              <div className="mb-5" key={index}>
                <label className="block mb-1">Langue</label>
                <input
                  type="text"
                  className="w-full p-2 mb-2 border border-white rounded bg-transparent text-white box-border"
                  value={language.name}
                  onChange={(e) => handleLanguageChange(e, index)}
                />
                <button type="button" className="p-2 bg-red-500 text-white rounded" onClick={() => removeLanguage(index)}>
                  Supprimer
                </button>
              </div>
            ))}
            <button type="button" className="p-2 bg-blue-500 text-white rounded" onClick={addLanguage}>
              + Ajouter une langue
            </button>
          </div>
          <h3 className="text-xl mt-5">Intéret</h3>
          <div>
            {interests.map((interest, index) => (
              <div className="mb-5" key={index}>
                <label className="block mb-1">Intérêt</label>
                <input
                  type="text"
                  className="w-full p-2 mb-2 border border-white rounded bg-transparent text-white box-border"
                  value={interest.name}
                  onChange={(e) => handleInterestChange(e, index)}
                />
                <button type="button" className="p-2 bg-red-500 text-white rounded" onClick={() => removeInterest(index)}>
                  Supprimer
                </button>
              </div>
            ))}
            <button type="button" className="p-2 bg-blue-500 text-white rounded" onClick={addInterest}>
              + Ajouter un intérêt
            </button>
          </div>
          <h3 className="text-xl mt-5">Éducation</h3>
          <div>
            {educationList.map((education, index) => (
              <div className="mb-5" key={index}>
                <label className="block mb-1">Éducation</label>
                <input
                  type="text"
                  className="w-full p-2 mb-2 border border-white rounded bg-transparent text-white box-border"
                  value={education.name}
                  onChange={(e) => handleEducationChange(e, index)}
                />
                <button type="button" className="p-2 bg-red-500 text-white rounded" onClick={() => removeEducation(index)}>
                  Supprimer
                </button>
              </div>
            ))}
            <button type="button" className="p-2 bg-blue-500 text-white rounded" onClick={addEducation}>
              + Ajouter une éducation
            </button>
          </div>
          <h3 className="text-xl mt-5">Compétences</h3>
          <div>
            {skills.map((skill, index) => (
              <div className="mb-5" key={index}>
                <label className="block mb-1">Compétence</label>
                <input
                  type="text"
                  className="w-full p-2 mb-2 border border-white rounded bg-transparent text-white box-border"
                  value={skill.name}
                  onChange={(e) => handleSkillChange(e, index)}
                />
                <button type="button" className="p-2 bg-red-500 text-white rounded" onClick={() => removeSkill(index)}>
                  Supprimer
                </button>
              </div>
            ))}
            <button type="button" className="p-2 bg-blue-500 text-white rounded" onClick={addSkill}>
              + Ajouter une compétence
            </button>
          </div>
        </div>
        <div className="mb-5">
          <label className="block mb-1">Année Cycle</label>
          <select className="w-full p-2 mb-2 border border-white rounded bg-transparent text-white box-border" value={framework} onChange={(e) => setFramework(e.target.value)}>
            <option value="" disabled>Je suis en...</option>
            <option value="1ere Année">1ere Année</option>
            <option value="2eme Année">2eme Année</option>
            <option value="3eme Année">3eme Année</option>
          </select>
        </div>
        <div className="mb-5">
          <label className="block mb-1">Message</label>
          <textarea className="w-full p-2 mb-2 border border-white rounded bg-transparent text-white box-border" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded w-full hover:bg-blue-700">Générer CV</button>
      </form>
    </div>
  );
};

export default FormComponent;

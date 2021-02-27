import React from 'react';
import { Segment, Header, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateEvent, createEvent} from "../eventActions";
import {Formik, Form} from "formik";
import * as yup from 'yup'
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import {categoryData} from "../../../app/api/categoryOption";
import MyDateInput from "../../../app/common/form/MyDateInput";


export default function EventForm({match, history}) {
  const selectedEvent = useSelector(state => state.event.events.find(e => e.id === match.params.id))
  const dispatch = useDispatch()

  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  };

  const validationSchema = yup.object({
      title: yup.string().required('You must provide a title'),
      category: yup.string().required('You must provide a category'),
      description: yup.string().required(''),
      city: yup.string().required(''),
      venue: yup.string().required(''),
      date: yup.string().required(''),
  })




  return (
    <Segment clearing>
      <Formik
          initialValues={initialValues}
          onSubmit={values =>{
              selectedEvent
                  ? dispatch(updateEvent({ ...selectedEvent, ...values }))
                  : dispatch(createEvent({
                      ...values,
                      id: cuid(),
                      hostedBy: 'Bob',
                      attendees: [],
                      hostPhotoURL: '/assets/user.png',
                  }));
              history.push('/events')
          }}
          validationSchema={validationSchema}
      >

            <Form className={'ui form'}>
                <Header sub color={'teal'} content={'Events Detail'} />

                <MyTextInput name={'title'} placeholder={'Event title'}/>
             <MySelectInput name={'category'} placeholder={'Category'} options={categoryData}/>
             <MyTextArea name={'description'} placeholder={'Description'} rows={3}/>
                <Header sub color={'teal'} content={'Events Location Details'} />

                <MyTextInput name={'city'} placeholder={'City'}/>
             <MyTextInput name={'venue'} placeholder={'Venue'}/>
             <MyDateInput
                 name={'date'}
                 timeFormay={'HH:mm'}
                 showTimeSelect
                 timeCaption={'time'}
                 dateFormat={'MMMM d, yyyy h:mm a'}
                 placeholderText={'Event date'}/>

              <Button type='submit' floated='right' positive content='Submit' />
              <Button
                  as={Link} to={'events'}
                  type='submit'
                  floated='right'
                  content='Cancel'
              />
            </Form>


      </Formik>

    </Segment>
  );
}

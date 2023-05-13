import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        component: () => import('@/views/home/Home.vue')
    }, {
        path: '/login',
        name: 'login',
        component: () => import('@/views/account/Login.vue'),
        meta: {
            'hidden': true
        }
    }, {
        path: '/register',
        name: 'register',
        component: () => import('@/views/account/Register.vue'),
        meta: {
            'hidden': true
        }
    }, {
        path: '/doctor',
        name: 'doctor',
        component: () => import('@/views/doctor/Doctor.vue')
    }, {
        path: '/doctor-detail/:doctorID',
        name: 'doctor-detail',
        component: () => import('@/views/doctor/DoctorDetail.vue')
    }, {
        path: '/appointment',
        name: 'appointment',
        component: () => import('@/views/appointment/Appointment.vue')
    }, {
        path: '/appointment-detail/:doctorID/:date/:half',
        name: 'appointment-detail',
        component: () => import('@/views/appointment/AppointmentDetail.vue')
    }, {
        path: '/userinfo',
        name: 'userinfo',
        component: () => import('@/views/user/UserInfo.vue')
    }, {
        path: '/patient',
        name: 'patient',
        component: () => import('@/views/user/Patient.vue')
    }, {
        path: '/my-appointment',
        name: 'my-appointment',
        component: () => import('@/views/user/MyAppointment.vue')
    }, {
        path: '/my-record',
        name: 'my-record',
        component: () => import('@/views/record/MyRecord.vue')
    }, {
        path: '/diagnose',
        name: 'diagnose',
        component: () => import('@/views/diagnose/Diagnose.vue')
    }, {
        path: '/leave',
        name: 'leave',
        component: () => import('@/views/leave/Leave.vue')
    }, {
        path: '/message',
        name: 'message',
        component: () => import('@/views/message/Message.vue')
    }]
})

export default router
import NonlinearBisection from '../components/methods/nonlinear/Bisection';
import NonlinearFalsePosition from '../components/methods/nonlinear/FalsePosition';
import NonlinearNewton from '../components/methods/nonlinear/Newton';
import NonlinearSecant from '../components/methods/nonlinear/Secant';
import NonlinearFixedPoint from '../components/methods/nonlinear/FixedPoint';

import LinearGauss from '../components/methods/linear/Gauss';
import LinearPivot from '../components/methods/linear/Pivot';
import LinearJordan from '../components/methods/linear/Jordan';
import LinearJacobi from '../components/methods/linear/Jacobi';
import LinearSeidel from '../components/methods/linear/Seidel';
import LinearLU from '../components/methods/linear/LU';
import LinearSVD from '../components/methods/linear/SVD';
import LinearInverse from '../components/methods/linear/Inverse';

import EigenPower from '../components/methods/eigen/Power';
import EigenInversePower from '../components/methods/eigen/InversePower';
import EigenShiftedPower from '../components/methods/eigen/ShiftedPower';
import EigenQR from '../components/methods/eigen/QR';

import CurveLinear from '../components/methods/curve/Linear';
import CurvePoly from '../components/methods/curve/Polynomial';
import CurveSpline from '../components/methods/curve/Spline';

import FFT from '../components/methods/fourier/FFT';

import DiffFinite from '../components/methods/differential/Finite';
import DiffRichardson from '../components/methods/differential/Richardson';

import IntegralMidpoint from '../components/methods/integral/Midpoint';
import IntegralTrapezoidal from '../components/methods/integral/Trapezoidal';
import IntegralSimpson from '../components/methods/integral/Simpson';
import IntegralQuadrature from '../components/methods/integral/Quadrature';

import OdeEuler from '../components/methods/ode/Euler';
import OdeMidpoint from '../components/methods/ode/Midpoint';
import OdeRunge from '../components/methods/ode/Runge';
import OdeMultistep from '../components/methods/ode/Multistep';
import OdePredictor from '../components/methods/ode/Predictor';

const categories = [
    {
        name : "Nonlinear Equations",
        path : "nonlinear",
        methods : [
            {
                name: "Bisection",
                path : "bisection",
                component: NonlinearBisection,
            },
            {
                name: "False-Position",
                path : "false_position",
                component: NonlinearFalsePosition,
            },
            {
                name: "Newton-Rhapson",
                path: "newton",
                component: NonlinearNewton,
            },
            {
                name: "Secant",
                path : "secant",
                component: NonlinearSecant,
            },
            {
                name: "Fixed-Point",
                path : "fixed_point",
                component: NonlinearFixedPoint,
            },
        ]
    },
    {
        name : "Linear Equations",
        path : "linear",
        methods : [
            {
                name: "Gauss Elimination",
                path : "gauss",
                component: LinearGauss,
            },
            {
                name: "Gauss Pivoting",
                path : "pivot",
                component: LinearPivot,
            },
            {
                name: "Gauss-Jordan",
                path : "jordan",
                component: LinearJordan,
            },
            {
                name: "Jacobi Iteration",
                path : "jacobi",
                component: LinearJacobi,
            },
            {
                name: "Gauss-Seidel Iteration",
                path : "seidel",
                component: LinearSeidel,
            },
            {
                name: "LU Decomposition",
                path : "lu",
                component: LinearLU,
            },
            {
                name: "Singular Value Decomposition",
                path : "svd",
                component: LinearSVD,
            },
            {
                name: "Inverse Matrix",
                path : "inverse",
                component: LinearInverse,
            },
        ]
    },
    {
        name : "Eigenvalues / Eigenvectors",
        path : "eigen",
        methods : [
            {
                name: "Power Method",
                path : "power",
                component: EigenPower,
            },
            {
                name: "Inverse-Power",
                path : "inverse",
                component: EigenInversePower,
            },
            {
                name: "Shifted Power",
                path : "shifted",
                component: EigenShiftedPower,
            },
            {
                name: "QR Factorisation",
                path : "qr",
                component: EigenQR,
            },
        ]
    },
    {
        name : "Curve Fitting",
        path : "curve",
        methods : [
            {
                name: "Linear",
                path : "linear",
                component: CurveLinear,
            },
            {
                name: "Polynomial Regression",
                path : "poly",
                component: CurvePoly,
            },
            {
                name: "Spline Interpolation",
                path : "spline",
                component: CurveSpline,
            }
        ]
    },
    {
        name : "Fourier Methods",
        path : "fourier",
        methods : [
            {
                name: "Fast Fourier Transform",
                path : "fft",
                component: FFT,
            },
        ]
    },
    {
        name : "Numerical Differentiation",
        path : "differential",
        methods : [
            {
                name: "Finite Difference",
                path : "finite",
                component: DiffFinite,
            },
            {
                name: "Richardson's Extrapolation",
                component: DiffRichardson,
            },
        ]
    },
    {
        name : "Numerical integration",
        path : "integral",
        methods : [
            {
                name: "Rectangle & Midpoint",
                path : "midpoint",
                component: IntegralMidpoint,
            },
            {
                name: "Trapezoidal",
                path : "trapezoidal",
                component: IntegralTrapezoidal,
            },
            {
                name: "Simpson's Method",
                path : "simpson",
                component: IntegralSimpson,
            },
            {
                name: "Gauss Quadrature",
                path : "quadrature",
                component: IntegralQuadrature,
            },
        ]
    },
    {
        name : "Ordinary Differential Equations",
        path : "ode",
        methods : [
            {
                name: "Euler",
                path : "euler",
                component: OdeEuler,
            },
            {
                name: "Midpoint",
                path : "midpoint",
                component: OdeMidpoint,
            },
            {
                name: "Runge-Kutta",
                path : "runge",
                component: OdeRunge,
            },
            {
                name: "Multistep",
                path : "multistep",
                component: OdeMultistep,
            },
            {
                name: "Predictor-Corrector",
                path : "predictor",
                component: OdePredictor,
            },
        ]
    }

]

export default categories;
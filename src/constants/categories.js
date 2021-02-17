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
import LinearPenrose from '../components/methods/linear/PenroseInverse';

import EigenPower from '../components/methods/eigen/Power';
import EigenInversePower from '../components/methods/eigen/InversePower';
import EigenShiftedPower from '../components/methods/eigen/ShiftedPower';
import EigenQR from '../components/methods/eigen/QR';

import OptiGoldenSearch from '../components/methods/optimisation/GoldenSearch';
import OptiParabolic from '../components/methods/optimisation/Parabolic';
import OptiNewton from '../components/methods/optimisation/Newton';
import OptiGradient from '../components/methods/optimisation/Gradient';
import OptiLinearProg from '../components/methods/optimisation/LinearProg';

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
                completed: true,
            },
            {
                name: "False-Position",
                path : "false_position",
                component: NonlinearFalsePosition,
                completed: true,
            },
            {
                name: "Fixed-Point",
                path : "fixed_point",
                component: NonlinearFixedPoint,
                completed: true,
            },
            {
                name: "Newton-Rhapson",
                path: "newton",
                component: NonlinearNewton,
                completed: true,
            },
            {
                name: "Modified Secant",
                path : "secant",
                component: NonlinearSecant,
                completed: true,
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
                completed: false,
            },
            {
                name: "Gauss Pivoting",
                path : "pivot",
                component: LinearPivot,
                completed: false,
            },
            {
                name: "Gauss-Jordan",
                path : "jordan",
                component: LinearJordan,
                completed: false,
            },
            {
                name: "Jacobi Iteration",
                path : "jacobi",
                component: LinearJacobi,
                completed: false,
            },
            {
                name: "Gauss-Seidel Iteration",
                path : "seidel",
                component: LinearSeidel,
                completed: false,
            },
            {
                name: "LU Decomposition",
                path : "lu",
                component: LinearLU,
                completed: false,
            },
            {
                name: "Singular Value Decomposition",
                path : "svd",
                component: LinearSVD,
                completed: false,
            },
            {
                name: "Inverse Matrix",
                path : "inverse",
                component: LinearInverse,
                completed: false,
            },
            {
                name: "Moore-Penrose Inverse",
                path : "penrose_inverse",
                component: LinearPenrose,
                completed: false,
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
                completed: false,
            },
            {
                name: "Inverse-Power",
                path : "inverse",
                component: EigenInversePower,
                completed: false,
            },
            {
                name: "Shifted Power",
                path : "shifted",
                component: EigenShiftedPower,
                completed: false,
            },
            {
                name: "QR Factorisation",
                path : "qr",
                component: EigenQR,
                completed: false,
            },
        ]
    },
    {
        name : "Optimisation",
        path : "optimisation",
        methods : [
            {
                name: "Golden-Section Search",
                path : "golden_search",
                component: OptiGoldenSearch,
                completed: false,
            },
            {
                name: "Parabolic Interpolation",
                path : "parabolic",
                component: OptiParabolic,
                completed: false,
            },
            {
                name: "Newton's Method",
                path : "newton",
                component: OptiNewton,
                completed: false,
            },
            {
                name: "Gradient Methods",
                path : "gradient",
                component: OptiGradient,
                completed: false,
            },
            {
                name: "Linear Programming",
                path : "linear_prog",
                component: OptiLinearProg,
                completed: false,
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
                completed: false,
            },
            {
                name: "Polynomial Regression",
                path : "poly",
                component: CurvePoly,
                completed: false,
            },
            {
                name: "Spline Interpolation",
                path : "spline",
                component: CurveSpline,
                completed: false,
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
                completed: false,
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
                completed: false,
            },
            {
                name: "Richardson's Extrapolation",
                component: DiffRichardson,
                completed: false,
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
                completed: false,
            },
            {
                name: "Trapezoidal",
                path : "trapezoidal",
                component: IntegralTrapezoidal,
                completed: false,
            },
            {
                name: "Simpson's Method",
                path : "simpson",
                component: IntegralSimpson,
                completed: false,
            },
            {
                name: "Gauss Quadrature",
                path : "quadrature",
                component: IntegralQuadrature,
                completed: false,
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
                completed: false,
            },
            {
                name: "Midpoint",
                path : "midpoint",
                component: OdeMidpoint,
                completed: false,
            },
            {
                name: "Runge-Kutta",
                path : "runge",
                component: OdeRunge,
                completed: false,
            },
            {
                name: "Multistep",
                path : "multistep",
                component: OdeMultistep,
                completed: false,
            },
            {
                name: "Predictor-Corrector",
                path : "predictor",
                component: OdePredictor,
                completed: false,
            },
        ]
    },

]

export default categories;
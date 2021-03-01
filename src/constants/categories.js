import { lazy } from 'react';

const NonlinearBisection = lazy(() => import('../components/methods/nonlinear/Bisection'));
const NonlinearFalsePosition = lazy(() => import('../components/methods/nonlinear/FalsePosition'));
const NonlinearNewton = lazy(() => import('../components/methods/nonlinear/Newton'));
const NonlinearSecant = lazy(() => import('../components/methods/nonlinear/Secant'));
const NonlinearFixedPoint = lazy(() => import('../components/methods/nonlinear/FixedPoint'));

const LinearGauss = lazy(() => import('../components/methods/linear/Gauss'));
const LinearJacobiSeidel = lazy(() => import('../components/methods/linear/JacobiSeidel'));
const LinearLU = lazy(() => import('../components/methods/linear/LU'));
const LinearSVD = lazy(() => import('../components/methods/linear/SVD'));
const LinearQR = lazy(() => import('../components/methods/linear/QR'));
const LinearInverse = lazy(() => import('../components/methods/linear/Inverse'));
const LinearPenrose = lazy(() => import('../components/methods/linear/PenroseInverse'));

const EigenPower = lazy(() => import('../components/methods/eigen/Power'));
const EigenInversePower = lazy(() => import('../components/methods/eigen/InversePower'));
const EigenShiftedPower = lazy(() => import('../components/methods/eigen/ShiftedPower'));
const EigenDiscs = lazy(() => import('../components/methods/eigen/Discs'));

const OptiGoldenSearch = lazy(() => import('../components/methods/optimisation/GoldenSearch'));
const OptiParabolic = lazy(() => import('../components/methods/optimisation/Parabolic'));
const OptiGradient = lazy(() => import('../components/methods/optimisation/Gradient'));
const OptiLinearProg = lazy(() => import('../components/methods/optimisation/LinearProg'));

const CurveLinear = lazy(() => import('../components/methods/curve/Linear'));
const CurvePoly = lazy(() => import('../components/methods/curve/Polynomial'));
const CurveSpline = lazy(() => import('../components/methods/curve/Spline'));

const FFT = lazy(() => import('../components/methods/fourier/FFT'));

const DiffFinite = lazy(() => import('../components/methods/differential/Finite'));
const DiffMultivariable = lazy(() => import('../components/methods/differential/Multivariable'));

const IntegralMidpoint = lazy(() => import('../components/methods/integral/Midpoint'));
const IntegralTrapezoidal = lazy(() => import('../components/methods/integral/Trapezoidal'));
const IntegralSimpson = lazy(() => import('../components/methods/integral/Simpson'));
const IntegralQuadrature = lazy(() => import('../components/methods/integral/Quadrature'));
const IntegralMonteCarlo = lazy(() => import('../components/methods/integral/MonteCarlo'));

const OdeEuler = lazy(() => import('../components/methods/ode/Euler'));
const OdeTaylor = lazy(() => import('../components/methods/ode/Taylor'));
const OdeRunge = lazy(() => import('../components/methods/ode/Runge'));
const OdeMultistep = lazy(() => import('../components/methods/ode/Multistep'));
const OdePredictor = lazy(() => import('../components/methods/ode/Predictor'));

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
                completed: true,
            },
            {
                name: "Jacobi / Gauss-Seidel Iteration",
                path : "jacobi_seidel",
                component: LinearJacobiSeidel,
                completed: true,
            },
            {
                name: "LU Decomposition",
                path : "lu",
                component: LinearLU,
                completed: true,
            },
            {
                name: "Singular Value Decomposition",
                path : "svd",
                component: LinearSVD,
                completed: false,
            },
            {
                name: "QR Decomposition",
                path : "qr",
                component: LinearQR,
                completed: true,
            },
            {
                name: "Inverse Matrix",
                path : "inverse",
                component: LinearInverse,
                completed: true,
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
                completed: true,
            },
            {
                name: "Inverse-Power",
                path : "inverse",
                component: EigenInversePower,
                completed: true,
            },
            {
                name: "Shifted Power",
                path : "shifted",
                component: EigenShiftedPower,
                completed: true,
            },
            {
                name: "Gerschgorin Discs",
                path : "discs",
                component: EigenDiscs,
                completed: true,
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
                completed: true,
            },
            {
                name: "Parabolic Interpolation",
                path : "parabolic",
                component: OptiParabolic,
                completed: false,
            },
            {
                name: "Gradient Method",
                path : "gradient",
                component: OptiGradient,
                completed: true,
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
                completed: true,
            },
            {
                name: "Multivariable",
                component: DiffMultivariable,
                completed: false,
            },
        ]
    },
    {
        name : "Numerical integration",
        path : "integral",
        methods : [
            {
                name: "Midpoint",
                path : "midpoint",
                component: IntegralMidpoint,
                completed: true,
            },
            {
                name: "Trapezoidal",
                path : "trapezoidal",
                component: IntegralTrapezoidal,
                completed: true,
            },
            {
                name: "Simpson's Method",
                path : "simpson",
                component: IntegralSimpson,
                completed: true,
            },
            {
                name: "Gauss Quadrature",
                path : "quadrature",
                component: IntegralQuadrature,
                completed: true,
            },
            {
                name: "Monte Carlo Integration",
                path : "monte_carlo",
                component: IntegralMonteCarlo,
                completed: true,
            },
        ]
    },
    {
        name : "Ordinary Differential Equations",
        path : "ode",
        methods : [
            {
                name: "Euler's Method",
                path : "euler",
                component: OdeEuler,
                completed: true,
            },
            {
                name: "Taylor Series Method",
                path : "taylor",
                component: OdeTaylor,
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
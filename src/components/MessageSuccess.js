import React from 'react';

function MessageSuccess({ purchaseId }) {
	return (
		<div className="alert alert-success d-flex align-items-center" role="alert">
			<svg
				className="bi flex-shrink-0 me-2"
				width="24"
				height="24"
				role="img"
				aria-label="Success:"
			>
				<use href="#check-circle-fill" />
			</svg>
			<div>Gracias por su compra! su id de transaccion es: {purchaseId} </div>
		</div>
	);
}

export default MessageSuccess;

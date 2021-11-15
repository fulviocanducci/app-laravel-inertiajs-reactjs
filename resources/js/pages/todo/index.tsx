import React, { FormEvent, useEffect } from "react";
import { Link, useForm } from "@inertiajs/inertia-react";

import Layout from "../layout";
import { Inertia } from "@inertiajs/inertia";

interface ITodo {
    id: number;
    description: string;
    done: boolean;
}

interface ITodoProps extends IModel<ITodo> {}

const initialValue: ITodo = {
    id: 0,
    description: "",
    done: false,
};

function Todo({ model }: ITodoProps) {
    const { data, setData, post, processing, errors, reset } = useForm<ITodo>({
        ...initialValue,
    });

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post("/todo", {
            onSuccess: () => {
                reset();
                setData({ ...initialValue });
            },
        });
    }

    return (
        <div>
            <h3>Todo</h3>
            <form onSubmit={submit}>
                <div className="mt-2 mb-2 form-group">
                    <label htmlFor="description">Descrição</label>
                    <input
                        id="description"
                        placeholder="descrição"
                        className="form-control form-control-sm"
                        type="text"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                    />
                    {errors.description && <div>{errors.description}</div>}
                </div>
                <div className="mt-2 mb-2">
                    <button
                        type="submit"
                        disabled={processing}
                        className="btn btn-primary btn-sm"
                    >
                        Inserir
                    </button>
                </div>
            </form>
            <div>
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th className="text-center">Id</th>
                            <th className="text-center">Descrição</th>
                            <th className="text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {model &&
                            model.data.map((todo) => (
                                <tr key={todo.id}>
                                    <td className="col-md-2 text-center">
                                        {todo.id.toString().padStart(8, "0")}
                                    </td>
                                    <td className="col-md-8 text-start">
                                        {todo.description}
                                    </td>
                                    <td className="col-md-2 text-center">
                                        {todo.done ? "Sim" : "Não"}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <div style={{ textAlign: "right" }}>
                    <Link
                        href={model.prev_page_url}
                        disabled={model.prev_page_url === null}
                        as="button"
                        className="btn btn-success btn-sm"
                    >
                        Anterior
                    </Link>{" "}
                    <Link
                        href={model.next_page_url}
                        disabled={model.next_page_url === null}
                        as="button"
                        className="btn btn-success btn-sm"
                    >
                        Próximo
                    </Link>
                </div>
            </div>
        </div>
    );
}

Todo.layout = (page: JSX.Element) => <Layout children={page} />;

export default Todo;

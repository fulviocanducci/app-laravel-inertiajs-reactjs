import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useForm } from "@inertiajs/inertia-react";

import Layout from "../layout";
import { Inertia } from "@inertiajs/inertia";
import { useDebounce } from "use-debounce-hook";
import { isNotUndefined, usePrevious } from "../../hooks";

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
    const [search, setSearch] = useState<string>("");
    const previous = usePrevious(search);
    const text = useDebounce(search, 580);
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

    function handleChangeSearch(e: ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target;
        setSearch(value);
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        loadSearch();
    }

    function loadSearch() {
        Inertia.visit("/todo", {
            data: { search: search || "" },
            only: ["model"],
            preserveState: true,
            replace: true,
        });
    }

    useEffect(() => {
        if (isNotUndefined(previous)) {
            loadSearch();
        }
    }, [text]);

    return (
        <div>
            <h3>Todo {text}</h3>
            <div>
                <form onSubmit={submit}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mt-2 mb-2 form-group">
                                <label htmlFor="description">Descrição</label>
                                <input
                                    id="description"
                                    placeholder="descrição"
                                    className="form-control form-control-sm"
                                    type="text"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                />
                                {errors.description && (
                                    <div>{errors.description}</div>
                                )}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mt-2 mb-2">
                                <div className="d-grid gap-2">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="btn btn-primary btn-sm"
                                    >
                                        Inserir
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <input
                            placeholder={"Pesquisa"}
                            id="search"
                            name="search"
                            type="search"
                            value={search}
                            className="form-control form-control-sm"
                            onChange={handleChangeSearch}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary btn-sm"
                                type="submit"
                            >
                                Filtro
                            </button>
                        </div>
                    </div>
                </form>
            </div>
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
                        preserveState={true}
                        href={model.prev_page_url}
                        disabled={model.prev_page_url === null}
                        as="button"
                        className="btn btn-success btn-sm"
                    >
                        Anterior
                    </Link>{" "}
                    <Link
                        preserveState={true}
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
